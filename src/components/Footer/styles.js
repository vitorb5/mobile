import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        width: '100%' ,
        height: 70,
        backgroundColor: '#20295F',
        position: "absolute",
        bottom:0,
        borderTopWidth: 5,
        borderTopColor: '#EE6B26',
        alignItems: "center"
    },

    button: {
        position: "relative",
        top: -40
    },
    text: {
        position: "relative",
        top: -30,
        color: '#FFFFFF'
    }
});

export default styles;