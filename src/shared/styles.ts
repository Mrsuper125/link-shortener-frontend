import {createStyles, px} from '@mantine/core';

// @ts-ignore
export const useStyles = createStyles((theme) => ({
    radioLabel: {
        verticalAlign: "center",
        display: "inline-block",
        paddingLeft: px(5),
        fontWeight: "normal"
    },
    linkFieldLabel: {
        fontSize: px(15)
    },
    label: {
        verticalAlign: "center",
        display: "block",
        fontWeight: "bold",
        fontFamily: "Arial",
        fontSize: px(15)
    }
}));
