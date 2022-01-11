import { getIdTokenResult } from 'firebase/auth'
import React,{useState, useEffect} from 'react'
import { View, Text, StyleSheet, StatusBar, FlatList, TouchableOpacity, TouchableOpacityBase} from 'react-native'
import Header from './Header'
import Card from './VoucherCard'
import {getTour, database} from '../../firebase/firebaes-config'
import {getDocs, collection} from 'firebase/firestore'


const Home = () => {

const [tour, settour] = useState([])

/* Lấy toàn bộ Voucher */
async function getAllData() {
    const query = await getDocs(collection(database, "Voucher"));
    let vouchers = [];
    query.forEach(doc=>{
        vouchers.push(doc.data());
    })
    settour(vouchers)
    console.log(tour);
}

useEffect(() => {
    getAllData();
}, [])
    return (
        <View style={styles.container}>
            <Header label="Danh sách tour" />
            <StatusBar barStyle="dark-content" />
            <FlatList data={tour}
            renderItem={({item})=>{
                return <Card info={item}/>
            }}
            
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        fontSize: 24,
        alignSelf: 'center',
        alignItems: 'center',
        backgroundColor: `#ffffff`
    }
})
export default Home
