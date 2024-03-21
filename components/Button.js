import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';

export default ({ onPress, text, size, theme}) => {
    const buttonStyles = [styles.button];
    const textStyles = [styles.text];

    if( size === "double"){
        buttonStyles.push(styles.buttonDouble);
    }
    
    if(theme === "secondary" ){
        buttonStyles.push(styles.buttonSecondary);
        textStyles.push(styles.textSecondary);
    }else if (theme === "accent"){
        buttonStyles.push(styles.buttonAccent);
    }

    return(
        <TouchableOpacity onPress={onPress} style={buttonStyles}>
            
        </TouchableOpacity>
    )

}