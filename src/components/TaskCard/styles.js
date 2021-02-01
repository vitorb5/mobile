import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
        marginVertical: 8,
        width: '86%',
        height: 80,
        shadowColor: '#000000',
        textShadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        borderRadius: 10
    },
    cardLeft: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    typeActive: {
        width:40,
        height: 40,
        marginLeft: 5
    },
    cardTitle: {
        marginLeft: 10,
        fontWeight: 'bold',
        fontSize: 13
    },
    cardRight: {
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        height: 50
    },
    cardDate: {
        color: '#EE6B26',
        fontWeight: 'bold',
        fontSize: 16
    },
    cardTime: {
        color: '#707070'
    },
    done:{
        opacity:0.5
    }
})

export default styles;