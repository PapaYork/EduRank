---
mode: agent
---

# Firebase Integration

## Firebase Core Concepts
164. Firebase is Google's Backend-as-a-Service (BaaS) providing authentication, database, storage, and cloud functions.
165. Firebase uses NoSQL database (Firestore) - data is stored in collections (tables) and documents (rows).
166. Firestore structure: Collections → Documents → Fields (and nested subcollections).
167. Firebase Authentication manages user sign-in/sign-up with various providers (email, Google, Apple, etc.).
168. Firebase Storage handles file uploads (images, documents) with automatic CDN distribution.
169. Cloud Functions are serverless backend code that run in response to events (onCreate, onUpdate, HTTP requests).

## Firebase Installation & Setup
170. Install Firebase packages:
```bash
    yarn add firebase
    yarn add @react-native-firebase/app
    yarn add @react-native-firebase/auth
    yarn add @react-native-firebase/firestore
    yarn add @react-native-firebase/storage
```
171. Initialize Firebase in a config file (firebase.config.ts):
```typescript
    import { initializeApp } from 'firebase/app';
    import { getAuth } from 'firebase/auth';
    import { getFirestore } from 'firebase/firestore';
    import { getStorage } from 'firebase/storage';
    
    const firebaseConfig = {
      apiKey: process.env.EXPO_PUBLIC_FIREBASE_API_KEY,
      authDomain: "your-app.firebaseapp.com",
      projectId: "your-project-id",
      storageBucket: "your-app.appspot.com",
      messagingSenderId: "123456789",
      appId: "your-app-id"
    };
    
    const app = initializeApp(firebaseConfig);
    export const auth = getAuth(app);
    export const db = getFirestore(app);
    export const storage = getStorage(app);
```
172. Store Firebase credentials in .env file, never commit them to git.
173. Add google-services.json (Android) and GoogleService-Info.plist (iOS) from Firebase Console.

## Firebase Authentication Patterns
174. Sign up with email/password:
```typescript
    import { createUserWithEmailAndPassword } from 'firebase/auth';
    
    const signup = async (email: string, password: string) => {
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        // Create user profile in Firestore
        await setDoc(doc(db, 'users', user.uid), {
          email: user.email,
          createdAt: serverTimestamp(),
        });
      } catch (error: any) {
        throw error.message;
      }
    };
```
175. Sign in with email/password:
```typescript
    import { signInWithEmailAndPassword } from 'firebase/auth';
    
    const signin = async (email: string, password: string) => {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      return userCredential.user;
    };
```
176. Sign out:
```typescript
    import { signOut } from 'firebase/auth';
    await signOut(auth);
```
177. Listen to auth state changes:
```typescript
    import { onAuthStateChanged } from 'firebase/auth';
    
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          setCurrentUser(user);
        } else {
          setCurrentUser(null);
        }
      });
      return unsubscribe;
    }, []);
```

## Firestore CRUD Operations
178. Create document (with auto-generated ID):
```typescript
    import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
    
    const addReview = async (data: ReviewData) => {
      const docRef = await addDoc(collection(db, 'reviews'), {
        ...data,
        createdAt: serverTimestamp(),
        userId: auth.currentUser?.uid,
      });
      return docRef.id;
    };
```
179. Create document (with custom ID):
```typescript
    import { doc, setDoc } from 'firebase/firestore';
    
    await setDoc(doc(db, 'users', userId), {
      username: 'PEEKAY',
      university: 'University of Example',
    });
```
180. Read single document:
```typescript
    import { doc, getDoc } from 'firebase/firestore';
    
    const docRef = doc(db, 'users', userId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const data = docSnap.data();
    }
```
181. Query collection:
```typescript
    import { collection, query, where, getDocs, orderBy, limit } from 'firebase/firestore';
    
    const q = query(
      collection(db, 'reviews'),
      where('professorId', '==', 'prof_123'),
      orderBy('createdAt', 'desc'),
      limit(10)
    );
    const querySnapshot = await getDocs(q);
    const reviews = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
```
182. Real-time listener (live updates):
```typescript
    import { onSnapshot } from 'firebase/firestore';
    
    useEffect(() => {
      const q = query(collection(db, 'reviews'));
      const unsubscribe = onSnapshot(q, (snapshot) => {
        const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setReviews(data);
      });
      return unsubscribe;
    }, []);
```
183. Update document:
```typescript
    import { doc, updateDoc, increment } from 'firebase/firestore';
    
    await updateDoc(doc(db, 'users', userId), {
      helpfulVotes: increment(1),
      lastUpdated: serverTimestamp(),
    });
```
184. Delete document:
```typescript
    import { doc, deleteDoc } from 'firebase/firestore';
    await deleteDoc(doc(db, 'reviews', reviewId));
```

## Firebase Data Modeling for This App
185. User document structure:
```typescript
    users/{userId}
      - username: string
      - email: string
      - university: string
      - imageUrl: string
      - totalReviews: number
      - avgRatingGiven: number
      - helpfulVotes: number
      - favoriteProfessors: string[] // Array of professor IDs
      - createdAt: timestamp
```
186. Review document structure:
```typescript
    reviews/{reviewId}
      - userId: string
      - professorId: string
      - professorName: string
      - course: string
      - rating: number (1-5)
      - comment: string
      - helpful: number
      - helpedBy: string[] // Array of user IDs who marked helpful
      - createdAt: timestamp
      - updatedAt: timestamp
```
187. Professor document structure:
```typescript
    professors/{professorId}
      - name: string
      - department: string
      - university: string
      - avgRating: number
      - totalReviews: number
      - courses: string[]
      - createdAt: timestamp
```

## Firebase Storage for Images
188. Upload profile picture:
```typescript
    import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
    
    const uploadProfileImage = async (uri: string, userId: string) => {
      const response = await fetch(uri);
      const blob = await response.blob();
      const storageRef = ref(storage, `profiles/${userId}.jpg`);
      await uploadBytes(storageRef, blob);
      const downloadURL = await getDownloadURL(storageRef);
      return downloadURL;
    };
```

## Firebase Security Rules
189. Firestore security rules should restrict access:
    - Users can only edit their own data
    - Anyone can read reviews and professors
    - Only authenticated users can create reviews
190. Example security rules:
```
    rules_version = '2';
    service cloud.firestore {
      match /databases/{database}/documents {
        match /users/{userId} {
          allow read: if true;
          allow write: if request.auth.uid == userId;
        }
        match /reviews/{reviewId} {
          allow read: if true;
          allow create: if request.auth != null;
          allow update, delete: if request.auth.uid == resource.data.userId;
        }
      }
    }
```

---

# Clerk Authentication Integration

## Clerk Core Concepts
191. Clerk is an authentication and user management service with pre-built UI components.
192. Clerk provides hosted pages (sign-in, sign-up) or embeddable components for custom UIs.
193. Clerk automatically handles sessions, JWTs, and token refresh without manual management.
194. User object from Clerk includes: id, email, username, firstName, lastName, imageUrl, publicMetadata.
195. Clerk supports: Email/password, magic links, OAuth (Google, Apple, GitHub), SMS/phone, SAML SSO.

## Clerk Installation & Setup
196. Install Clerk packages:
```bash
    yarn add @clerk/clerk-expo
    yarn add expo-secure-store expo-web-browser
    yarn add expo-dev-client  # Required for Clerk
```
197. Wrap app with ClerkProvider in root layout:
```typescript
    // app/_layout.tsx
    import { ClerkProvider, ClerkLoaded } from '@clerk/clerk-expo';
    import * as SecureStore from 'expo-secure-store';
    
    const tokenCache = {
      async getToken(key: string) {
        try {
          return SecureStore.getItemAsync(key);
        } catch (err) {
          return null;
        }
      },
      async saveToken(key: string, value: string) {
        try {
          return SecureStore.setItemAsync(key, value);
        } catch (err) {
          return;
        }
      },
    };
    
    export default function RootLayout() {
      return (
        <ClerkProvider 
          publishableKey={process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!}
          tokenCache={tokenCache}
        >
          <ClerkLoaded>
            <Slot />
          </ClerkLoaded>
        </ClerkProvider>
      );
    }
```
198. Store Clerk publishable key in .env file:
```
    EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_xxxxx
```
199. Clerk requires a development build, not Expo Go:
```bash
    yarn expo prebuild
    yarn ios  # or yarn android
```

## Clerk Authentication Hooks
200. useAuth() - Access authentication state and methods:
```typescript
    import { useAuth } from '@clerk/clerk-expo';
    
    const { isSignedIn, isLoaded, signOut, getToken } = useAuth();
```
201. useUser() - Access current user data:
```typescript
    import { useUser } from '@clerk/clerk-expo';
    
    const { user, isLoaded } = useUser();
    // user.id, user.emailAddresses, user.firstName, user.imageUrl, etc.
```
202. useSignIn() - Sign in methods:
```typescript
    import { useSignIn } from '@clerk/clerk-expo';
    
    const { signIn, setActive, isLoaded } = useSignIn();
```
203. useSignUp() - Sign up methods:
```typescript
    import { useSignUp } from '@clerk/clerk-expo';
    
    const { signUp, setActive, isLoaded } = useSignUp();
```

## Clerk Sign-In Flow
204. Email/password sign-in:
```typescript
    const { signIn, setActive } = useSignIn();
    
    const onSignIn = async (email: string, password: string) => {
      try {
        const result = await signIn.create({
          identifier: email,
          password,
        });
        await setActive({ session: result.createdSessionId });
        router.replace('/(tabs)');
      } catch (err: any) {
        console.error(err.errors[0].message);
      }
    };
```
205. OAuth sign-in (Google, Apple):
```typescript
    import * as WebBrowser from 'expo-web-browser';
    
    WebBrowser.maybeCompleteAuthSession();
    
    const { startOAuthFlow } = useOAuth({ strategy: 'oauth_google' });
    
    const onGoogleSignIn = async () => {
      try {
        const { createdSessionId, setActive } = await startOAuthFlow();
        if (createdSessionId) {
          await setActive!({ session: createdSessionId });
          router.replace('/(tabs)');
        }
      } catch (err) {
        console.error(err);
      }
    };
```

## Clerk Sign-Up Flow
206. Email/password sign-up with verification:
```typescript
    const { signUp, setActive } = useSignUp();
    const [pendingVerification, setPendingVerification] = useState(false);
    const [code, setCode] = useState('');
    
    const onSignUp = async (email: string, password: string) => {
      try {
        await signUp.create({ emailAddress: email, password });
        await signUp.prepareEmailAddressVerification({ strategy: 'email_code' });
        setPendingVerification(true);
      } catch (err: any) {
        console.error(err.errors[0].message);
      }
    };
    
    const onVerify = async () => {
      try {
        const result = await signUp.attemptEmailAddressVerification({ code });
        await setActive({ session: result.createdSessionId });
        router.replace('/(tabs)');
      } catch (err: any) {
        console.error(err.errors[0].message);
      }
    };
```

## Clerk User Profile & Metadata
207. Access user information:
```typescript
    const { user } = useUser();
    
    const username = user?.username;
    const email = user?.primaryEmailAddress?.emailAddress;
    const profileImage = user?.imageUrl;
    const userId = user?.id;
```
208. Update user profile:
```typescript
    await user?.update({
      firstName: 'John',
      lastName: 'Doe',
    });
```
209. Public metadata (readable by anyone):
```typescript
    await user?.update({
      publicMetadata: {
        university: 'University of Example',
        totalReviews: 12,
      },
    });
```
210. Private metadata (only readable by user):
```typescript
    await user?.update({
      privateMetadata: {
        favoriteColor: 'blue',
      },
    });
```

## Clerk Protected Routes
211. Protect authenticated routes:
```typescript
    // app/(tabs)/_layout.tsx
    import { useAuth } from '@clerk/clerk-expo';
    import { Redirect } from 'expo-router';
    
    export default function TabsLayout() {
      const { isSignedIn, isLoaded } = useAuth();
      
      if (!isLoaded) return null;
      if (!isSignedIn) return <Redirect href="/(auth)/sign-in" />;
      
      return <Tabs>{/* tabs */}</Tabs>;
    }
```
212. Public routes (auth screens):
```typescript
    // app/(auth)/_layout.tsx
    import { useAuth } from '@clerk/clerk-expo';
    import { Redirect } from 'expo-router';
    
    export default function AuthLayout() {
      const { isSignedIn, isLoaded } = useAuth();
      
      if (!isLoaded) return null;
      if (isSignedIn) return <Redirect href="/(tabs)" />;
      
      return <Stack />;
    }
```

## Clerk + Backend Integration
213. Get Clerk JWT token for API calls:
```typescript
    const { getToken } = useAuth();
    
    const token = await getToken();
    const response = await fetch('https://api.example.com/reviews', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
```
214. Verify Clerk token on backend (Node.js/Express):
```javascript
    const { clerkClient } = require('@clerk/clerk-sdk-node');
    
    app.get('/api/protected', async (req, res) => {
      const token = req.headers.authorization?.split(' ')[1];
      const verified = await clerkClient.verifyToken(token);
      // verified.userId
    });
```

## Clerk + Firestore Integration
215. Sync Clerk user to Firestore after sign-in:
```typescript
    import { useUser } from '@clerk/clerk-expo';
    import { doc, setDoc } from 'firebase/firestore';
    
    useEffect(() => {
      if (user) {
        setDoc(doc(db, 'users', user.id), {
          email: user.primaryEmailAddress?.emailAddress,
          username: user.username,
          imageUrl: user.imageUrl,
          firstName: user.firstName,
          lastName: user.lastName,
          createdAt: serverTimestamp(),
        }, { merge: true });
      }
    }, [user]);
```
216. Use Clerk user ID as Firestore document ID for easy matching.

## Clerk Session Management
217. Sign out:
```typescript
    const { signOut } = useAuth();
    await signOut();
    router.replace('/(auth)/sign-in');
```
218. Check if user is signed in:
```typescript
    const { isSignedIn, isLoaded } = useAuth();
    
    if (!isLoaded) {
      return <LoadingScreen />;
    }
    
    if (!isSignedIn) {
      return <SignInPrompt />;
    }
```

## Clerk vs Firebase Auth Comparison
219. Use Clerk when:
    - You want pre-built, beautiful UI components
    - You need social OAuth without extra configuration
    - You want user management dashboard
    - You prefer hosted authentication pages
    - You need advanced features (MFA, organizations, SAML)
220. Use Firebase Auth when:
    - You're already using Firebase ecosystem
    - You want unlimited free users
    - You need tight Firebase integration
    - You prefer building custom UI from scratch
    - You want Google Cloud Platform integration

## Common Patterns
221. Always check `isLoaded` before accessing auth state to avoid race conditions.
222. Use ClerkLoaded wrapper to ensure Clerk is initialized before rendering.
223. Store tokens securely using expo-secure-store, never AsyncStorage.
224. Handle auth errors gracefully with try-catch and user-friendly messages.
225. Redirect users after successful auth using expo-router's replace() not push().
226. Use onAuthStateChanged (Firebase) or useAuth hook (Clerk) to listen for auth changes.
227. Sync user data to your database (Firestore/Supabase) after authentication for additional profile data.
228. Use serverTimestamp() for timestamps to ensure consistency across devices.