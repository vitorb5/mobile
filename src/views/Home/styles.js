import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        //alignItems alinha na orizontal
        alignItems: 'center',
        //justifyContetn alinha na horizontal
        justifyContent : 'flex-start'
    },
    filter: {
        flexDirection: "row",
        width: '100%',
        justifyContent: "space-around",
        height: 70,
        alignItems: "center"
    },
    filterTextActived: {
        fontWeight: "bold",
        fontSize: 18,
        color: '#EE6B26'
    },
    filterTextInative: {
        color: '#20295F',
        fontWeight: "bold",
        fontSize: 18,
        opacity: 0.5
    },
    title: {
        width: '100%',
        borderBottomWidth: 1,
        borderColor: '#20295F',
        alignItems: 'center'
    },
    titleText: {
        color: '#20295F',
        position: 'relative',
        top: 11,
        backgroundColor: '#ffffff',
        paddingHorizontal: 10
    },
    content:{
        width: '100%',
        marginTop: 30
    },
})

export default styles;