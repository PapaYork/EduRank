import React, { useRef, useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Alert,
} from 'react-native';
import { useRouter } from 'expo-router';
import { useSignUp } from '@clerk/clerk-expo';
import { SafeAreaView } from 'react-native-safe-area-context';

const VerificationScreen = () => {
    const router = useRouter();
    const { signUp, setActive } = useSignUp();

    // Store each digit as a string in an array of length 6
    const [digits, setDigits] = useState<string[]>(['', '', '', '', '', '']);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const inputsRef = useRef<(TextInput | null)[]>([]);

    // Update a single digit and auto-focus next input when appropriate
    const onChangeDigit = (text: string, i: number) => {
        if (text && !/^\d$/.test(text)) return; // allow only single digit
        const next = [...digits];
        next[i] = text;
        setDigits(next);
        if (text && i < 5) inputsRef.current[i + 1]?.focus();
    };

    // Move focus back on backspace
    const onKeyPress = (e: any, i: number) => {
        if (e.nativeEvent.key === 'Backspace' && !digits[i] && i > 0) {
            inputsRef.current[i - 1]?.focus();
        }
    };

    const verify = async () => {
        const code = digits.join('');
        if (code.length !== 6) {
            setError('Enter all 6 digits');
            return;
        }
        setLoading(true);
        setError('');
        try {
            const result = await signUp?.attemptEmailAddressVerification({ code });
            if (result?.status === 'complete') {
                if (setActive) {
                    await setActive({ session: result.createdSessionId });
                }
                router.replace('/(tabs)/home');
            } else {
                setError('Verification failed');
            }
        } catch (err: any) {
            setError(err?.errors?.[0]?.message || 'Invalid code');
        } finally {
            setLoading(false);
        }
    };

    const resend = async () => {
        try {
            await signUp?.prepareEmailAddressVerification();
            setError('');
            Alert.alert('Sent', 'Verification code has been resent.');
        } catch (e) {
            setError('Could not resend code');
        }
    };

    return (
        <SafeAreaView style={s.container}>
            <Text style={s.title}>Verify your email</Text>
            <Text style={s.subtitle}>Enter the 6-digit code sent to your email.</Text>

            <View style={s.row}>
                {digits.map((d, i) => (
                    <TextInput
                        key={i}
                        ref={(r) => { inputsRef.current[i] = r; }}
                        value={d}
                        onChangeText={(t) => onChangeDigit(t, i)}
                        onKeyPress={(e) => onKeyPress(e, i)}
                        keyboardType="number-pad"
                        maxLength={1}
                        style={[s.input, d ? s.inputFilled : null]}
                        textAlign="center"
                        selectTextOnFocus
                        autoFocus={i === 0}
                    />
                ))}
            </View>

            {error ? <Text style={s.error}>{error}</Text> : null}

            <TouchableOpacity
                style={[s.button, loading && s.buttonDisabled]}
                onPress={verify}
                disabled={loading}
                activeOpacity={0.8}
            >
                <Text style={s.buttonText}>{loading ? 'Verifying...' : 'Verify'}</Text>
            </TouchableOpacity>

            <View style={s.bottomRow}>
                <Text style={s.note}>Didn't receive it?</Text>
                <TouchableOpacity onPress={resend}>
                    <Text style={s.link}> Resend</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const s = StyleSheet.create({
    container: { flex: 1, padding: 24, backgroundColor: '#fff' },
    title: { fontSize: 22, fontWeight: '600', marginTop: 24, marginBottom: 8 },
    subtitle: { color: '#666', marginBottom: 20 },
    row: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 12 },
    input: {
        width: 44,
        height: 56,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        fontSize: 22,
        backgroundColor: '#fafafa',
    },
    inputFilled: { borderColor: '#0066cc', backgroundColor: '#eef6ff' },
    error: { color: '#b00020', textAlign: 'center', marginBottom: 8 },
    button: {
        backgroundColor: '#0066cc',
        paddingVertical: 14,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 8,
    },
    buttonDisabled: { opacity: 0.6 },
    buttonText: { color: '#fff', fontWeight: '600' },
    bottomRow: { flexDirection: 'row', justifyContent: 'center', marginTop: 18 },
    note: { color: '#666' },
    link: { color: '#0066cc', fontWeight: '600' },
});

export default VerificationScreen;
