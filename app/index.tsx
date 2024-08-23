import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import {Text, View, Image, Button, Pressable, TouchableOpacity} from "react-native";
import {StyleSheet} from "react-native";
import { ScrollView } from 'react-native';
import Page2 from "./page2";


export default function Index() {
    return (
        <ScrollView>
            <View style={styles.container}>
                <View>
                    <Image source={require('@/assets/images/pic.jpeg')} style={styles.image}></Image>
                    {/* <Image source={require('@/assets/images/vector.png')} style={styles.image1}></Image> */}
                </View>
                {/* <Image source={require('@/assets/images/vector.png')} style={styles.image1}></Image> */}

                <Image source={require('@/assets/images/title.png')} style={styles.title}></Image>

                <Image source={require('@/assets/images/round.png')} style={styles.image3}></Image>
                <Image source={require('@/assets/images/vector.png')} style={styles.image1}></Image>
                <Image source={require('@/assets/images/round1.png')} style={styles.round1}></Image>
                <Image source={require('@/assets/images/wallet1.png')} style={styles.wallet}></Image>
                <Image source={require('@/assets/images/round1.png')} style={styles.round2}></Image>
                <Image source={require('@/assets/images/bell.png')} style={styles.bell}></Image>
                <Image source={require('@/assets/images/round1.png')} style={styles.round3}></Image>
                <Image source={require('@/assets/images/share.png')} style={styles.share}></Image>

            </View>
            <View>
                <Image
                    source={require('@/assets/images/Rectangle.png')}
                    style={styles.rectangle}></Image>
                <Text style={styles.text}>Services</Text>
                <View>
                    <Image source={require('@/assets/images/rect.png')} style={styles.rect}></Image>
                    <Image source={require('@/assets/images/location-2.png')} style={styles.loc}></Image>
                    <Text style={styles.letter}>Nearby</Text>
                    <Text style={styles.letter}>Parking</Text>

                    <Image source={require('@/assets/images/rect.png')} style={styles.rect}></Image>
                    <Image source={require('@/assets/images/truck1.png')} style={styles.loc}></Image>
                    <Text style={styles.letter}>Roadside</Text>
                    <Text style={styles.letter}>Assitance</Text>
                </View>
                <View style={styles.container2}>
                    <Image source={require('@/assets/images/rect.png')} style={styles.rect}></Image>
                    <Image source={require('@/assets/images/car1.png')} style={styles.loc}></Image>
                    <Text style={styles.letter2}>EV Parking</Text>

                    <Image source={require('@/assets/images/rect.png')} style={styles.rect1}></Image>
                    <Image source={require('@/assets/images/bill.png')} style={styles.loc1}></Image>
                    <Text style={styles.letter3}>Pay</Text>
                    <Text style={styles.letter3}>Challan</Text>
                </View>

                <View style={styles.container3}>
                    <Image source={require('@/assets/images/rect.png')} style={styles.rect1}></Image>
                    <Image source={require('@/assets/images/carwash-2.png')} style={styles.loc2}></Image>
                    <Text style={styles.letter4}>Car Wash</Text>

                    <Image source={require('@/assets/images/rect.png')} style={styles.rect2}></Image>
                    <Image source={require('@/assets/images/toll1.png')} style={styles.loc4}></Image>
                    <Text style={styles.letter5}>Toll</Text>
                    <Text style={styles.letter5}>Estimator</Text>
                </View>

                <View style={styles.container4}>
                    <Image source={require('@/assets/images/rect.png')} style={styles.rect1}></Image>
                    <Image source={require('@/assets/images/ins.png')} style={styles.loc2}></Image>
                    <Text style={styles.letter4}>Vehicle</Text>
                    <Text style={styles.letter4}>Insurance</Text>

                    <Image source={require('@/assets/images/rect.png')} style={styles.rect3}></Image>
                    <Image source={require('@/assets/images/park.png')} style={styles.loc5}></Image>
                    <Text style={styles.letter6}>Valet</Text>
                    <Text style={styles.letter6}>Parking</Text>
                </View>

            </View>

            <View style={styles.grid1}>
                <Image source={require('@/assets/images/rect2.png')}></Image>
                <Text style={styles.text1}>FASTag Recharge</Text>
                <Text style={styles.text2}>Get upto 100% cashback on first 3 Fastag {'\n'}  Recharge</Text>
                <Image source={require('@/assets/images/bar1.png')} style={styles.bar}></Image>
                <Image source={require('@/assets/images/frame.png')} style={styles.frame}></Image>
                <Text style={styles.text3}>Powered by</Text>
                <Image source={require('@/assets/images/netc.png')} style={styles.ima}></Image>
                <Image source={require('@/assets/images/bbp.png')} style={styles.ima1}></Image>
                <Image source={require('@/assets/images/line.png')} style={styles.line}></Image>
                <Text style={styles.text5}>Discover</Text>
                
                <View style={styles.container5}>
                 <View>
                <Image source={require('@/assets/images/rectcolour.png')}></Image>
                <Image source={require('@/assets/images/bag.png')} style={styles.bag}></Image>
                <Text style={styles.text6}> Buy </Text>
                <Text style={styles.text6}>FASTag</Text>
                </View>
                <View>
                <Image source={require('@/assets/images/rectcolour.png')}></Image>
                <Image source={require('@/assets/images/change.png')} style={styles.bag}></Image>
                <Text style={styles.text6}>Replace</Text>
                <Text style={styles.text6}>FASTag</Text>
                </View>
                <View>
                <Image source={require('@/assets/images/rectcolour.png')}></Image>
                <Image source={require('@/assets/images/done.png')} style={styles.bag}></Image>
                <Text style={styles.text6}>Active</Text>
                <Text style={styles.text6}>FASTag</Text>
                </View> 
                <View>
                <Image source={require('@/assets/images/rectcolour.png')}></Image>
                <Image source={require('@/assets/images/delete.png')} style={styles.bag}></Image>
                <Text style={styles.text6}>Close</Text>
                <Text style={styles.text6}>FASTag</Text>
                </View>
                </View>

            </View>

            <View>
                <Image source={require('@/assets/images/Rectangle2.png')} style={styles.container6}></Image>
                <Image source={require('@/assets/images/pic.png')} style={styles.pic}></Image>
                <Text style={styles.text7}>Add Money To Wallet</Text>
                <Text style={styles.text7}>Get 2% Cashback</Text>
               <Pressable style={styles.button}>
                <Text style={styles.text8}>Add Money</Text>
               </Pressable>
            </View>

            
                <Image source={require('@/assets/images/dot.png')} style={styles.dot}></Image>
                
                               {/* <Image source={require('@/assets/images/Rect3.png')} style={styles.container7}></Image> */}
            <View>
            <Image source={require('@/assets/images/Rect3.png')} style={styles.container7}></Image>
            <Text style={styles.text9}>Others</Text>
            <View style={styles.container8}>
                <View>
                <Image source={require('@/assets/images/rect.png')}></Image>
                <Image source={require('@/assets/images/helmet.png')} style={styles.image4}></Image>
                <Text style={styles.text10}>Rentout</Text>
                <Text style={styles.text10}>Helmet</Text>
                </View>

                <View>
                <Image source={require('@/assets/images/rect.png')}></Image>
                <Image source={require('@/assets/images/fuel.png')} style={styles.image4}></Image>
                <Text style={styles.text10}>Fuel Price</Text>
                </View>

                <View>
                <Image source={require('@/assets/images/rect.png')}></Image>
                <Image source={require('@/assets/images/shoppingbag.png')} style={styles.image4}></Image>
                <Text style={styles.text10}>Shop</Text>
                </View>

                <View>
                <Image source={require('@/assets/images/rect.png')}></Image>
                <Image source={require('@/assets/images/cars.png')} style={styles.image4}></Image>
                <Text style={styles.text10}>My Vehicles</Text>
                </View>
                
            </View>

            </View>

            <Text style={styles.text11}>Deals For You</Text>
            <Image source={require('@/assets/images/banner.png')} style={styles.banner}></Image>

            <View>
                <Image source={require('@/assets/images/Rect3.png')} style={styles.container9}></Image>
                <Text style={styles.text12}>Gonna Travel ?</Text>
            </View>
            <View style={styles.container10}>
                <View style={styles.view} >
                    <Image source={require('@/assets/images/rectcolour.png')} ></Image>
                    <Image source={require('@/assets/images/carwash1.png')} style={styles.ima2}></Image>
                    <Text style={styles.text13}>Car Wash</Text>
                </View>

                <View style={styles.view} >
                    <Image source={require('@/assets/images/rectcolour.png')} ></Image>
                    <Image source={require('@/assets/images/toll2.png')} style={styles.ima2}></Image>
                    <Text style={styles.text13}>Estimate Toll</Text>
                </View>

                <View style={styles.view} >
                    <Image source={require('@/assets/images/rectcolour.png')} ></Image>
                    <Image source={require('@/assets/images/shopping-bag.png')} style={styles.ima2}></Image>
                    <Text style={styles.text14}>Shop</Text>
                </View>

                <View style={styles.view} >
                    <Image source={require('@/assets/images/rectcolour.png')} ></Image>
                    <Image source={require('@/assets/images/traffic.png')} style={styles.ima2}></Image>
                    <Text style={styles.text13}>Protocols</Text>
                </View>




            </View>

            <Text style={styles.text15}>Premium Plan</Text>

            <View style={styles.container12}>
                <View style={styles.container11}>
                    <Image source={require('@/assets/images/rect5.png')} style={styles.banner1}></Image>
                    <Text style={styles.heading}>Monthly Parking</Text>
                    <Text style={styles.para}>Dedicated parking available near you.</Text>
                    <Pressable style={styles.button1}>
                        <Text style={styles.buttontext}>Explore Now</Text>
                    </Pressable>
                    <Image source={require('@/assets/images/carspa.png')} style={styles.image5}></Image>

                </View>
                <View style={styles.container11}>
                <Image source={require('@/assets/images/rect4.png')} style={styles.banner1}></Image>
                    <Text style={styles.heading}>Elite Car Wash</Text>
                    <Text style={styles.para}>Elite car grooming at your doorstep.</Text>
                    <Pressable style={styles.button1}>
                        <Text style={styles.buttontext}>Explore Now</Text>
                    </Pressable>


                </View>
            </View>

           
            <View >
            <Image source={require('@/assets/images/Rectangle5.png')} style={styles.rect5}></Image>
            <Text style={styles.text16}>Recharge & Bill Payments</Text>
        <View style={styles.flex}>
            <View>
                <Image source={require('@/assets/images/rectcolour.png')}></Image>
                <Image source={require('@/assets/images/barrier.png')} style={styles.image6}></Image>
                <Text style={styles.subtopic}>Fastag</Text>
                <Text style={styles.subtopic1}>Recharge</Text>
            </View>

            <View>
                <Image source={require('@/assets/images/rectcolour.png')}></Image>
                <Image source={require('@/assets/images/recharge.png')} style={styles.image6}></Image>
                <Text style={styles.subtopic}>Fastag</Text>
                <Text  style={styles.subtopic1}>Recharge</Text>
            </View>

            < View>
                 <Image source={require('@/assets/images/rectcolour.png')}></Image>
                <Image source={require('@/assets/images/electricity.png')} style={styles.image6}></Image>
                <Text style={styles.subtopic}>Electricity</Text>
                
            </View>

            < View>
                <Image source={require('@/assets/images/rectcolour.png')}></Image>
                <Image source={require('@/assets/images/tap.png')} style={styles.image6}></Image>
                <Text style={styles.subtopic}>Water</Text>
            </View>
        </View>


        <View style={styles.flex}>
            <View>
                <Image source={require('@/assets/images/rectcolour.png')}></Image>
                <Image source={require('@/assets/images/gas.png')} style={styles.image6}></Image>
                <Text style={styles.subtopic}>Gas</Text>
                <Text style={styles.subtopic1}>Cylinder</Text>
            </View>

            <View>
                <Image source={require('@/assets/images/rectcolour.png')}></Image>
                <Image source={require('@/assets/images/money.png')} style={styles.image6}></Image>
                <Text style={styles.subtopic}>Loan</Text>
                <Text  style={styles.subtopic1}>Payment</Text>
            </View>

            < View>
                 <Image source={require('@/assets/images/rectcolour.png')}></Image>
                <Image source={require('@/assets/images/dish.png')} style={styles.image6}></Image>
                <Text style={styles.subtopic}>DTH</Text>
                
            </View>

            < View>
                <Image source={require('@/assets/images/rectcolour.png')}></Image>
                <Image source={require('@/assets/images/rent.png')} style={styles.image6}></Image>
                <Text style={styles.subtopic}>House Rent</Text>
            </View>
        </View>
            </View>


            <View style={styles.flex1}>
                <View>
                <Image source={require('@/assets/images/Rectangle21.png')}></Image>
                <View style={styles.para1}>
                <Text style={styles.heading1}>Get 15% off on</Text>
                <Text style={styles.heading2}>FASTag recharge</Text>
                <Text style={styles.para2}>Pay Using Axis Bank Credit & Debit Cards</Text>
                <TouchableOpacity style={styles.button2}>
                    <Text style={styles.text17}>Recharge Now</Text>
                </TouchableOpacity>
                <Image source={require('@/assets/images/fasttag.png')} style={styles.fast}></Image>
                </View>

                </View>
                <View>
                    <Image source={require('@/assets/images/pic2.png')}></Image>
                </View>
            </View>

            <View style={styles.container13}>
            <Image source={require('@/assets/images/Rect3.png')}></Image>
            <Text style={styles.text18}>Your Car’s Center</Text>
            <View style={styles.container14}>
            <View>
                <Image source={require('@/assets/images/rectcolour.png')}></Image>
                <Image source={require('@/assets/images/gas.png')} style={styles.image6}></Image>
                <Text style={styles.subtopic}>Gas</Text>
                <Text style={styles.subtopic1}>Cylinder</Text>
            </View>

            <View>
                <Image source={require('@/assets/images/rectcolour.png')}></Image>
                <Image source={require('@/assets/images/money.png')} style={styles.image6}></Image>
                <Text style={styles.subtopic}>Loan</Text>
                <Text  style={styles.subtopic1}>Payment</Text>
            </View>

            < View>
                 <Image source={require('@/assets/images/rectcolour.png')}></Image>
                <Image source={require('@/assets/images/dish.png')} style={styles.image6}></Image>
                <Text style={styles.subtopic}>DTH</Text>
                
            </View>

            < View>
                <Image source={require('@/assets/images/rectcolour.png')}></Image>
                <Image source={require('@/assets/images/rent.png')} style={styles.image6}></Image>
                <Text style={styles.subtopic}>House Rent</Text>
            </View>
            </View>
            </View>

            <Text style={styles.text19}>Trending</Text>

            <View style={styles.container15}>
                
                <Image source={require('@/assets/images/back.png')} ></Image>
            <View style={styles.container16}>
                <Text style={styles.text20}>Save
                    <Text><Image source={require('@/assets/images/rupee11.png')}></Image>500</Text>
                </Text>
                <Text style={styles.text21}>On Your First EV Parking</Text>
                <Text style={styles.text22}>We provide dedicated monthly parking with surveillance</Text>
                <Image source={require('@/assets/images/profile.png')} style={styles.ima3}></Image>
                <Text style={styles.text23} >100+</Text>
                <Text style={styles.text24}>Happy Customers</Text>
                <Image source={require('@/assets/images/dash.png')} style={styles.ima4}></Image>
            </View>

            </View>
            
            
        <View style={styles.container18}>
            <Image source={require('@/assets/images/Rect3.png')}></Image>
            <Text style={styles.text18}>Exclusive Offers</Text>

         <View style={styles.container17}>
            <View>
                <Image source={require('@/assets/images/rectcolour.png')}></Image>
                <Image source={require('@/assets/images/rewards.png')} style={styles.image6}></Image>
                <Text style={styles.subtopic}>Rewards</Text>
            </View>

            <View>
                <Image source={require('@/assets/images/rectcolour.png')}></Image>
                <Image source={require('@/assets/images/discount.png')} style={styles.image6}></Image>
                <Text style={styles.subtopic}>Discounts</Text>
                
            </View>

            < View>
                 <Image source={require('@/assets/images/rectcolour.png')} style={styles.container20}></Image>
                <Image source={require('@/assets/images/speaker.png')} style={styles.image6}></Image>
                <Text style={styles.subtopic}>Refer & win</Text>
                
            </View>

           
           </View>
        </View>

        <View style={styles.container19}>
            <Text style={styles.text25}>How parkqwik works ?</Text>
            <View>
                <Image source={require('@/assets/images/newrec.png')} style={styles.container20} ></Image>
                <Image source={require('@/assets/images/phone.png')} style={styles.phone}></Image>
                <Image source={require('@/assets/images/play.png')} style={styles.play}></Image>
            </View>
        </View>

        
           

        
        </ScrollView>

        
    );
}

const styles = StyleSheet.create({
    container: {
        // flex:1, alignItems:'center',
        width: 380,
        backgroundColor: '#1A9E75',
        height: 252.53,
        top: 30,
        // left:6,
        borderBottomLeftRadius: 80,
        borderBottomRightRadius: 90
    },
    image: {
        width: 59,
        height: 60,
        borderRadius: 50,
        top: 50,
        left: 20
    },
    image1: {
        bottom: 28,
        left: 60,
        width: 15,
        height: 15
    },
    title: {
        left: 90,
        width: 180,
        height: 38
    },
    image3: {
        left: 55,
        width: 25,
        height: 25,
        bottom: 10
    },
    round1: {
        left: 270,
        bottom: 72,
        width: 30
    },
    wallet: {
        left: 277,
        bottom: 97
    },
    round2: {
        left: 305,
        bottom: 117,
        width: 30
    },
    bell: {
        left: 313,
        bottom: 140
    },
    round3: {
        left: 340,
        bottom: 162,
        width: 30
    },
    share: {
        left: 345,
        bottom: 182
    },
    rectangle: {
        bottom: 85,
        left: 17,
        width: 345
    },
    text: {
        fontWeight: 'bold',
        fontSize: 18,
        paddingLeft: 30,
        bottom: 320,
        color: '#393939'
    },
    rect: {
        bottom: 310,
        left: 30
    },

    loc: {
        bottom: 350,
        left: 45
    },
    letter: {

        bottom: 350,
        left: 42,
        fontSize:8

    },
    letter1: {

        bottom: 350,
        left: 40,

        fontSize: 8

    },
    container2: {
        bottom: 205,
        left: 90

    },
    rect1: {
        bottom: 300,
        left: 30
    },
    loc1: {
        bottom: 334,
        left: 45
    },
    letter2: {

        bottom: 340,
        left: 39,
        fontSize: 8

    },
    letter3: {

        bottom: 340,
        left: 49,
        fontSize: 8

    },
    letter4: {
        bottom: 323,
        left: 40,
        fontSize: 8

    },
    loc2: {
        bottom: 334,
        left: 48

    },
    loc3: {
        bottom: 340,
        left: 48

    },
    container3: {
        bottom: 408,
        left: 180
    },
    rect2: {

        bottom: 280,
        left: 30

    },
    loc4: {
        bottom: 320,
        left: 48

    },
    letter5: {
        bottom: 321,
        left: 45,
        fontSize: 8
    },
    container4: {
        bottom: 596,
        left: 250
    },
    rect3:{
    
      bottom:290,
      left:30
    
  },
  loc5:{
    bottom:330,
    left:48

  },
  letter6: {
    bottom: 330,
    left: 45,
    fontSize: 8
},
grid1:{
    bottom:880,
    left:15
},
text1:{
    bottom:330,
    left:19,
    color:'#393939',
    fontWeight:'bold',
    fontSize:16
},
text2:{
    bottom:330,
    left:20,
    color:'#A0A0A0',
    fontSize:14
},
bar:{
bottom:300,
left:20

},
frame:{
    bottom:340,
    left:230
},
text3:{
    color:'#434343',
    bottom:330,
    fontSize:12,
    fontWeight:'400',
    left:20

},
ima:{
    bottom:365,
    left:100
},
ima1:{
    bottom:407,
    left:170
},
line:{
bottom:390,
// backgroundColor:'red',
left:25

},
text5:{
    bottom:380,
    left:20,
    fontSize:16,
    color:'#393939',
    fontWeight:'bold'
},
container5:{
    bottom:370,
    display:'flex',
    flexDirection:'row',
    justifyContent:'flex-start',
    left:20,
    gap:20

},
bag:{
    bottom:40,
    left:17,
    width:24,
    height:24
},
text6:{
    bottom:28,
    textAlign:'center',
    height:20,
    fontSize:10,
    color:'#393939',
    fontWeight:'400'
    
},
container6:{
    width:328,
    height:192,
    bottom:1250,
    left:26,
    borderRadius:10
  
},
pic:{
    bottom:1420,
    left:225
},
text7:{
    bottom:1530,
    left:50,
    paddingBottom:5,
    color:'#FFFFFF'

},
button:{
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#ffff',
    width:100,
    height:30,
    bottom:1510,
    left:50,
    borderRadius:10

    
},
text8:{
    color:'#1A9E75',
    fontWeight:'bold'

  

},
container7:{
    bottom:1410,
    left:18,
    height:160
},
dot:{
    bottom:1420,
    left:165
},
text9:{
    bottom:1545,
    left:35,
    fontWeight:'bold',
    letterSpacing:0.5,

},
container8:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'flex-start',
    gap:20,
    left:40,
    bottom:1545

},
image4:{
    bottom:35,
    left:20
},
text10:{
    bottom:20,
    left:12,
    color:'#434343',
    fontSize:10,
    fontWeight:'400',
    letterSpacing:0.5,

},
text11:{
    bottom:1500,
    left:28,
    fontWeight:'500',
    lineHeight:13,
    letterSpacing:0.5,

},
banner:{
    width:465,
    height:136,
    left:10,
    borderRadius:10,
    bottom:1480
},
container9:{
    bottom:1450,
    left:12,
    height:160
},
 text12:{
    bottom:1585,
    left:30,
    height:160,
    fontSize:16,
    fontWeight:'500',
    // fontFamily:'Poppins',
    letterSpacing:0.5,
},

ima2:{
    bottom:38,
    left:16
},
text13:{
    bottom:28,
    fontSize:10,
    left:8,
    fontWeight:'400',
    // fontFamily:'Poppins',
    letterSpacing:0.5,
    color:'#434343'
    
},
view:{
    bottom:1710,
    left:40

},
container10:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'flex-start',
    gap:15,
    cursor:'pointer'
    
},
text14:{
    bottom:25,
    fontSize:10,
    left:15,
    fontWeight:'400',
    // fontFamily:'Poppins',
    // letterSpacing:0.5,
    color:'#434343'
    
},

text15:{
    bottom:1685,
    left:25,
    fontSize:16,
    fontWeight:'500',
    color:'#393939'
},
container11:{
    width:170,
    height:130,
    bottom:1655,
    left:16,
},
container12:{
    display:'flex',
    flexDirection:'row',
    gap:10

    
},
heading:{
    fontWeight:'600',
    fontSize:15,
    color:'rgba(251, 255, 41, 1)',
    letterSpacing:2.5,
    textAlign:"center",
    bottom:120
},
para:{
    
    textAlign:'left',
    left:5,
    fontWeight:'500',
    fontSize:11,
    color:'rgba(255, 255, 255, 1)',
    bottom:105
    
},
banner1:{
    width:175,
    borderRadius:15,
    height:130
},
button1:{
    borderWidth:1,
    borderRadius:20,
    padding:6,
    width:105,
    height:35,
    backgroundColor:'rgba(255, 255, 255, 1)',
    borderColor:'rgba(255, 255, 255, 1)',
    bottom:100,
    left:5
    
    
},
buttontext:{
    textAlign:'center',
    fontWeight:'bold',

},
image5:{
    width:70,
    height:70,
    bottom:175,
    left:110
},
text16:{
    bottom:1855,
    left:40,
    fontWeight:'500',
    fontSize:16
    
},
rect5:{
    bottom:1630,
    left:15
},
image6:{
    bottom:39,
    left:15
},
subtopic:{
    bottom:27,
    left:7.5,
    fontWeight:'400',
    fontSize:10

},
subtopic1:{
    bottom:27,
    left:5,
    fontSize:10
},
flex:{
    display:'flex',
    flexDirection:'row',
    gap:15,
    left:45,
    bottom:1845,

},
flex1:{
    display:'flex',
    flexDirection:'row',
    bottom:1830,
    gap:10,
    left:16

},
heading1:{
    color:'rgba(251, 255, 41, 1)',
    fontSize:16,

},
heading2:{
    color:'white',
    fontSize:20,
    top:4
},
para2:{
    color:'white',
    fontSize:8,
    top:4

},
para1:{
    bottom:120,
    left:10
},
button2:{
    borderWidth:1,
    backgroundColor:'rgba(255, 255, 255, 1)',
    borderRadius:12,
    textAlign:'center',
    padding:4,
    top:18,
    width:120,
    height:30,
    borderColor:'rgba(255, 255, 255, 1)',
    

},
text17:{
    fontWeight:'500'
},
fast:{
    left:130,
    bottom:20
    
},
container13:{
    bottom:1905,
    left:10
},
text18:{
    bottom:130,
    left:25,
    fontWeight:'500',
    fontSize:16,
    color:'rgba(57, 57, 57, 1)'
},
container14:{
    display:'flex',
    flexDirection:'row',
    gap:18,
    bottom:120,
    left:20
},
text19:{
    bottom:2010,
    left:25,
    fontWeight:'500',
    fontSize:16,
    color:'rgba(57, 57, 57, 1)'
},
container15:{
    bottom:1995,
    left:15
},
container16:{
    bottom:185,
    left:12
},
text20:{
    color:'rgba(235, 255, 0, 1)',
    fontSize:24
},
text21:{
    color:'rgba(255, 255, 255, 1)',
    fontSize:18
},
text22:{
    color:'rgba(255, 255, 255, 1)',
    fontSize:10,
    top:10,
    fontWeight:'400'

},
ima3:{
    width:65,
    height:35,
   left:170,
   top:25
},
text23:{
    fontSize:20,
    fontWeight:'600',
    color:'rgba(255, 255, 255, 1)',
    left:235,
    bottom:15
},
text24:{
    fontSize:8,
    fontWeight:'400',
    color:'rgba(255, 255, 255, 1)',
    left:235,
    bottom:15
},
ima4:{
    width:95,
    left:110
},
container17:{
    display:'flex',
    flexDirection:'row',
    gap:5,
    justifyContent:'space-evenly',
    bottom:120,
    right:12
    
},
container18:{
    bottom:2120,
    left:10
},
container19:{
    bottom:2220,
    left:23,
    
},
phone:{
    bottom:130,
    left:135
},
play:{
    width:30,
    height:30,
    bottom:210,
    left:150
},
text25:{
    fontWeight:'500',
    fontSize:16,
    color:'rgba(57, 57, 57, 1)',
    left:8
},
container20:{
top:10,
left:2
}

})
