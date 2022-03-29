import React, { useState } from 'react'
import { Keyboard, Modal, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View, TextInput } from "react-native"

export default function MyModel({ modalVisible, setModalVisible, addName }) {
  const [text, onChangeText] = React.useState("")
  const [error, setError] = useState(false)
  const handleClose = () => {
    onChangeText('')
    setError(false)
    setModalVisible(false)
  }
  return (

    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => setModalVisible(!modalVisible)}
    >
      <TouchableWithoutFeedback onPress={() => {
        Keyboard.dismiss()
        handleClose()
      }}>
        <View style={styles.centeredView}>
          <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>

            <View style={styles.modalView}>

              {/* <Text style={styles.modalText}>new split name</Text> */}
              <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
                placeholder="Write program name..."

              />
              {error && <Text style={{ color: 'red', opacity: 0.5, fontSize: 12 }}>Error: name should be at least 3 characters</Text>}

              <TouchableOpacity
                style={[styles.button, styles.buttonClose]}
                onPress={() => {
                  if (text.length < 3) return setError(true)
                  addName(text)
                  handleClose()

                }}
              >
                <Text style={styles.textStyle}>Add new name</Text>

              </TouchableOpacity>

            </View>
          </TouchableWithoutFeedback>

        </View>
      </TouchableWithoutFeedback>
    </Modal>

  )
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#8C60D9",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  input: {
    borderRadius: 10,
    backgroundColor: 'white',
    height: 40,
    margin: 12,
    width: 175,
    borderWidth: 1,
    padding: 10,
  },
})
