import  {StyleSheet} from 'react-native';

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        alignItems: 'flex-start',
        justifyContent: 'flex-start'

    },
    imageIcon:{
        width:40,
        height:40,
        marginHorizontal: 5,
        marginVertical: 5
    },
    label:{
        color: '#707070',
        fontSize: 16,
        paddingHorizontal: 10,
        marginTop: 20,
        marginBottom: 5
    },

    input:{
        fontSize: 18,
        padding: 10,
        width: '95%',
        borderBottomWidth: 1,
        borderBottomColor: '#EE6B26',
        marginHorizontal: 5
    },

    inputArea:{
        //borderWidth e borderColor já criam a caixa de texto
        fontSize: 18,
        padding: 10,
        width: '95%',
        borderWidth: 1,
        borderColor: '#EE6B26',
        marginHorizontal: 10,
        borderRadius: 10,
        height: 100,
        textAlignVertical: 'top'
    },

    inputInLine:{
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
        marginHorizontal: 10
    },

    switchLab:{
        fontWeight: 'bold',
        color: '#EE6B26',
        textTransform: 'uppercase',
        fontSize: 18,
        paddingLeft: 5
    },
    
    removeLabel:{
        fontWeight:'bold',
        color: '#20295F',
        textTransform:'uppercase',
        fontSize: 16,
        paddingHorizontal:5
    },

    inLine:{
        width:'100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10 
    },
    



});

export default styles;