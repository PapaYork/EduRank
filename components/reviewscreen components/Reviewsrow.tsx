import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import React, { FC } from "react";
import colors from "../../constants/colors";
import { Entypo, Feather, Ionicons } from "@expo/vector-icons";
import { format } from "date-fns";


export interface ReviewsrowProps {
  professor: string;
  course: string;
  rating: number;
  review: string;
  date: string;
  img: string;
  likes: number;
}

const Reviewsrow: FC<ReviewsrowProps> = ({
  professor,
  course,
  rating,
  review,
  date,
  img,
  likes,
}) => {
  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <Entypo
          key={i}
          name={i < rating ? "star" : "star-outlined"}
          size={20}
          color={i < rating ? colors.primary : "#CCCCCC"}
        />
      );
    }
    return stars;
  };

  return (
    <View style={styles.reviewcontainer}>
      <View style={styles.topcontainer}>
        <Image source={{ uri: img }} style={styles.image} />
        <View style={styles.header}>
          <Text style={styles.professor}>{professor}</Text>
          <Text style={styles.course}>{course}</Text>
        </View>
      </View>
      <View style={styles.starsContainer}>{renderStars()}</View>
      <TouchableOpacity style={styles.icon}>
        <Entypo name="dots-three-vertical" size={18} color="gray" />
      </TouchableOpacity>
      <Text style={styles.reviewText}>{review}</Text>
      <View style={styles.bottomContainer}>
        <View style={styles.leftBottom}>
          <Feather name="thumbs-up" size={18} color="black" />
          <Text style={styles.likes}>{likes}</Text>
          <Text style={styles.date}>{format(new Date(date), "dd/MM/yyyy")}</Text>
        </View>
        <View style={styles.published}>
          {/* <Entypo name="dot-single" size={25} color="green" /> */}
          <Text style={styles.publishedText}>Published</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  reviewcontainer: {
    flexDirection: "column",
    padding: 15,
    marginHorizontal: 15,
    marginVertical: 15,
    backgroundColor: "#f9f9f9ff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 4,
    width: "94%",
    alignSelf: "center",
  },
  topcontainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginTop: 5,
    marginRight: 10,
  },
  header: {
    flex: 1,
    flexDirection: "column",
    marginTop: -15,
  },
  professor: {
    fontSize: 21,
    fontWeight: "bold",
    color: "#000",
  },
  course: {
    fontSize: 15,
    color: colors.gray,
    marginRight: -15,
  },
  icon: {
    position: "absolute",
    top: 15,
    right: 15,
  },
  review: {
    fontSize: 14,
    color: colors.textdark,
    marginTop: 10,
  },
  starsContainer: {
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 10,
  },
  reviewText: {
    fontSize: 16,
    color: "#333",
    lineHeight: 24,
    marginBottom: 10,
  },
  bottomContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  leftBottom: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  likes: {
    fontSize: 16,
    color: colors.textdark,
    marginLeft: -5,
    alignSelf: "center",
  },
  date: {
    fontSize: 16,
    color: colors.gray,
    alignSelf: "center",
  },
  published: {
    backgroundColor: "#D4EDDA",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 20,
  },
  publishedText: {
    fontSize: 12,
    color: "#155724",
    fontWeight: "bold",
  },
});

export default Reviewsrow;
