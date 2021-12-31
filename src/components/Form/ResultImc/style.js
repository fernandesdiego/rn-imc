import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    resultImc: {
        flex: 1,
        marginTop: 15,
        paddingTop: 15,
        borderRadius: 60,
        alignItems: "center",
    },
    numberImc: {
        width: "100%",
        fontSize: 48,
        color: "#FF0043",
        fontWeight: "bold"
    }
    ,
    information: {
        fontSize: 18,
        color: "#FF0043",
        fontWeight: "bold"
    },
    boxShareButton: {
        width: "100%",
        alignItems: "center",
        marginBottom: 10,
    },
    share: {
        backgroundColor: "#1877f2",
        borderRadius: 50,
        paddingBottom: 5,
        paddingTop: 5
    },
    shareText: {
        color: "#fff",
        fontWeight: "bold",
        paddingHorizontal: 30
    }
})


export default styles