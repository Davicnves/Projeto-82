import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import TabNavigator from "./TabNavigator";
import Profile from "../screens/Profile";
 
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="tela inicial" component={TabNavigator} />
            <Drawer.Screen name="perfil" component={Profile} /> 
        </Drawer.Navigator>
    )
}