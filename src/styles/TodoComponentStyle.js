const styles = {
    done: {
        textDecoration: "line-through",
        opacity: ".5",
        display: "flex",
        width: "100%",
        marginLeft: '20px',
    },
    header: {
        justifyContent: "center",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    },
    main: {
        width: "100%",
        margin: "20px auto",
    },
    card: {
        padding: "20px",
        margin: "20px 0",
    },
    todo: {
        position: "relative",
        display: "flex",
        flexFow: "row",
        alignContent: "space-between"
    },
    label: {
        display: "flex",
        width: "100%",
        marginLeft: '20px',
    },
    divider: {
        position: "absolute",
        width: "100%",
        top: 0
    },
    input: {
        width: '90%',
    },
    addButton: {
        height: '100%'
    }
};

export default styles;