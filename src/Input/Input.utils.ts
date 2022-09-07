import React from 'react';

export const onChangePhone = (e: React.ChangeEvent<HTMLInputElement>, setPhone: (prev: any) => void) => {
    console.log(e.target.value)
    let phoneVal = e.target.value.replace(/\D/g, ""),
        formattedPhone = '+7 '

    if(!phoneVal){
        setPhone('');
    }

    if (phoneVal.length > 1) {
        formattedPhone += '' + phoneVal.substring(1, 4);
    }

    if (phoneVal.length >= 5) {
        formattedPhone += ' ' + phoneVal.substring(4, 7);
    }

    if (phoneVal.length >= 8) {
        formattedPhone += ' ' + phoneVal.substring(7, 9);
    }

    if (phoneVal.length >= 10) {
        formattedPhone += ' ' + phoneVal.substring(9, 11);
    }

    setPhone(formattedPhone);
}