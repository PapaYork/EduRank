import * as DropdownMenu from 'zeego/dropdown-menu'
import React from 'react'
import { Entypo } from '@expo/vector-icons'

export type Props = {
    items: Array<{
        key: string;
        title: string;
        icon: string;
    }>;
    onTriggerPress: (key: string) => void;
}

const MyMenu = ({ items, onTriggerPress }: Props) => {


    return (
        <DropdownMenu.Root>
            <DropdownMenu.Trigger>
                <Entypo name="dots-three-vertical" size={18} color="gray" />
            </DropdownMenu.Trigger> 

            <DropdownMenu.Content>
                <DropdownMenu.Label>Edit Options</DropdownMenu.Label>
                <DropdownMenu.Item key="42">
                    <DropdownMenu.ItemTitle>Edit</DropdownMenu.ItemTitle>
                </DropdownMenu.Item>
                <DropdownMenu.Item key="42" >
                    <DropdownMenu.ItemTitle>Delete</DropdownMenu.ItemTitle>
                </DropdownMenu.Item>
            </DropdownMenu.Content>
        </DropdownMenu.Root>
    )
}

export default MyMenu;