import { Text, View, Linking } from 'react-native';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from 'expo-router/drawer';
import { Drawer } from 'expo-router/drawer';

export default function Layout() {
    return (
        <Drawer>
            <Drawer.Screen 
                name='index'
                options={{
                    drawerLabel: 'Home',
                    title: 'overview'
                }}
            />
            <Drawer.Screen 
                name='tomorrow'
                options={{
                    drawerLabel: "Edit Tomorrow's todo",
                    title: 'overview'
                }}
            />
        </Drawer>
    );
}