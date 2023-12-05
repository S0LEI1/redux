import { View, Text, StyleSheet, TextInput, Pressable } from "react-native";
import React, { useState } from "react";
import { addPost, deletePost, updatePost,selectCount } from "./redux/postSlice";
import { useDispatch, useSelector } from "react-redux";
const Post = () => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [isUpdate, setIsUpdate] =useState(false);
  const [id, setID] = useState(1);
  const dispatch = useDispatch();
  const posts = useSelector(selectCount);
  console.log('posts',posts);
  return (
    <View>
      <View>
        <View>
          <Text>Title</Text>
          <TextInput
            value={title}
            onChangeText={(text) => setTitle(text)}
            style={{ borderWidth: 1 }}
          />
        </View>
        <View>
          <Text>Amount</Text>
          <TextInput
            value={amount}
            onChangeText={(text) => setAmount(text)}
            style={{ borderWidth: 1 }}
          />
        </View>
        <Pressable
          onPress={() => {
            isUpdate ?  dispatch(updatePost({id: id, title: title, amount: amount})) : dispatch(addPost({ id: posts.length + 1, title, amount }))
            setAmount(""), setTitle("");
            setIsUpdate(!isUpdate)
          }}
          style={{ borderWidth: 1, marginTop: 20, width: 50 }}
        >
          <Text>{isUpdate ? 'Update' :'Post'}</Text>
        </Pressable>
      </View>
      {/* {posts.map((post) => (
        <View style={{flexDirection:'row', marginHorizontal:5, marginVertical:10}}>
          <View style={{ borderWidth: 1, paddingHorizontal:10, paddingVertical:5 }}>
            <Text>Title: {post.title}</Text>
            <Text>Amount: {post.amount}</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Pressable onPress={()=>{
              setIsUpdate(true)
              setAmount(post.amount)
              setTitle(post.title)
              setID(post.id)
            }} style={{borderWidth:1, marginHorizontal:5, padding:5}}>
              <Text>Edit</Text>
            </Pressable>
            <Pressable onPress={()=>dispatch(deletePost({id: post.id}))} style={{borderWidth:1, marginHorizontal:5, padding:5}}>
              <Text>Delete</Text>
            </Pressable>
          </View>
        </View>
      ))} */}
      {
        posts.length > 0 ? <View>
          {posts.map(({item})=>(
            <View key={item.id}><Text>{item.id}</Text></View>
          ))}
        </View> : <View><Text>Nodata</Text></View>
      }
    </View>
  );
};

export default Post;
