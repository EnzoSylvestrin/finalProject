import { View } from 'react-native';

import { Heading } from '@/components/ui/heading';
import { Toast, ToastDescription, ToastTitle, useToast } from '@/components/ui/toast';
import { useState } from 'react';
import { Button, ButtonText } from '@/components/ui/button';

export default function HomeScreen() {
  const toast = useToast();

  const [toastId, setToastId] = useState('0');

  const handleToast = () => {
    if (!toast.isActive(toastId)) {
      ShowToast()
    }
  }

  const ShowToast = () => {
    const newId = Math.random().toString();
    setToastId(newId);
    toast.show({
      id: newId,
      placement: "top right",
      duration: 3000,
      render: ({ id }) => {
        const uniqueToastId = "toast-" + id
        return (
          <Toast nativeID={uniqueToastId} action="muted" variant="solid">
            <ToastTitle>Hello!</ToastTitle>
            <ToastDescription>
              This is a customized toast message.
            </ToastDescription>
          </Toast>
        )
      },
    })
  }

  return (
    <View className='w-12 flex items-center justify-center'>
      <Heading style={{ fontFamily: 'Rubik' }}>Teste</Heading>
      <Button onPress={handleToast} variant='link' className='bg-black'>
        <ButtonText>Hello World!</ButtonText>
      </Button>
    </View>
  );
}