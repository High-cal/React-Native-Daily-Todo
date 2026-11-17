import { Text, View, Linking } from 'react-native';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from 'expo-router/drawer';
import { Drawer } from 'expo-router/drawer';
import { TaskProvider } from '../../context/TaskContext';

export default function Layout() {
    return (
        <TaskProvider>
        <Drawer>
            <Drawer.Screen 
                name='index'
                options={{
                    drawerLabel: 'Home',
                    title: 'Daily List'
                }}
            />
            <Drawer.Screen 
                name='tomorrow'
                options={{
                    drawerLabel: "Add New Task for Tomorrow",
                    title: 'Add New Tasks for Tomorrow'
                }}
            />
            <Drawer.Screen 
                name='list'
                options={{
                    drawerLabel: "Create Daily List",
                    title: 'Edit and Add Daily List'
                }}
            />
        </Drawer>
        </TaskProvider>
    );
}