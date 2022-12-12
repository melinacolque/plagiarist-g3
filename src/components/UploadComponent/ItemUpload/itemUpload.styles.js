import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    main: {
        position: "relative",
        padding: '10px',
        height: "100%",
    },
    container: {
        position: "relative",
        padding: '10px',
        height: "100%",
        borderStyle: 'dotted',
    },
    input: {
        position: "absolute",
        margin: "0",
        padding: "0",
        width: '100%',
        height: '100%',
        outline: "none",
        opacity: "0"
    },
    button: {
        position: "absolute",
        left: "0px",
        margin: "10px",
        border: " solid 0px gray",
        borderRadius: "8px",
        color: "aliceblue",
        background: " #3751FF",
        boxShadow: "0px 4px 12px rgba(55, 81, 255, 0.24)",
        width: "316px",
        height: "48px"
    },
    cardInfo: {
        width: "fit-content",
        display: "flex",
        border: " solid 2px #E3E3E3",
        borderRadius: "8px",
        alignItems: "center"
    },
    buttonDelete: {
        border: "2px",
        borderRadius: '8px',
        background: "#D1310F",
        margin: "2px",
        zIndex: "1200",
        width: "40px",
        height: "40px"

    },
    deleteIcom: {
        color: "#FCFCFC"

    },
    inputButton: {
        display: "none"
    },
    '@media (max-width: 800px)': {
        container: {
            display: "none"
        },
        input: {

        },
        inputButton: {
            position: "relative",
            left: "0px",
            display: "flex",
            width: "316px",
            height: "48px",
            backgroundColor: "#3751FF",
            borderRadius: "8px",
            border: " solid 0px gray",
            margin: "0x",
            color: "white",
            justifyContent: "center",
            alignItems: "center"
        }
    }
}));
export default useStyles;