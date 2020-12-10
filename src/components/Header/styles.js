import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({

    header: {
        width:'100%',
        height:90,
        backgroundColor:'#20295F',
        borderBottomWidth: 5,
        borderBottomColor: '#EE6B26',
        alignItems: 'center',
        justifyContent: 'center' 
    },
    logo: {
        width: 100,
        height: 40
        
    },
    notification: {
        position: 'absolute',
        right: 35
    },
    notificationImage: {
        width: 29,
        height: 32
    },
    notificationText: {
        fontWeight: "bold",
        color: '#EE6B26'
    },
    circle: {
        width: 19,
        backgroundColor: '#FFFFFF',
        borderRadius: 50,
        alignItems: 'center',
        position: 'absolute',
        left: 13,
        bottom: 13
    },
    qrcodeIcon: {
        position: 'absolute',
        left: 20
    },
    notificationQrcode: {
        width:30,
        height:30
    }
});

export default styles;