import { View, SafeAreaView } from 'react-native'
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '../components/ui/alert-dialog'
import { Button } from '@/components/ui/button'
import { PortalHost } from '@rn-primitives/portal'
import { Text } from '@/components/ui/text'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../components/ui/card'
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '../components/ui/dialog'
import * as AlertDialogPrimitive from '@rn-primitives/alert-dialog';

const Home = () => {
    return <SafeAreaView >
        <AlertDialogPrimitive.Root>
            <AlertDialogPrimitive.Trigger asChild>
                <Button variant='outline'>
                    <Text>Show Alert Dialog</Text>
                </Button>
            </AlertDialogPrimitive.Trigger>
            <AlertDialogPrimitive.Portal >
                <AlertDialogPrimitive.Overlay className='z-50 bg-black/80 flex justify-center items-center p-2 absolute top-0 right-0 bottom-0 left-0'>
                    <AlertDialogPrimitive.Content className='z-50 max-w-lg gap-4 border border-border bg-background p-6 shadow-lg shadow-foreground/10 web:duration-200 rounded-lg'>
                        <AlertDialogPrimitive.Title className=''>you absolutely sure?</AlertDialogPrimitive.Title>
                        <AlertDialogPrimitive.Description>
                            This action cannot be undone. This will permanently delete your account and remove your data from our servers.
                        </AlertDialogPrimitive.Description>
                        <AlertDialogPrimitive.Cancel><Text>Cancel</Text></AlertDialogPrimitive.Cancel>
                        <AlertDialogPrimitive.Action><Text>Continue</Text></AlertDialogPrimitive.Action>
                    </AlertDialogPrimitive.Content>
                </AlertDialogPrimitive.Overlay>
            </AlertDialogPrimitive.Portal>
        </AlertDialogPrimitive.Root>

        <View className='items-start'>
            <Button >
                <Text>Default</Text>
            </Button>

            <Badge variant={"outline"}>
                <Text>Default</Text>
            </Badge>

            <Card className='w-full max-w-sm'>
                <CardHeader>
                    <CardTitle>Card Title</CardTitle>
                    <CardDescription>Card Description</CardDescription>
                </CardHeader>
                <CardContent>
                    <Text>Card Content</Text>
                </CardContent>
                <CardFooter>
                    <Text>Card Footer</Text>
                </CardFooter>
            </Card>

            <Dialog>
                <DialogTrigger asChild>
                    <Button variant='outline'>
                        <Text>Edit Profile</Text>
                    </Button>
                </DialogTrigger>
                <DialogContent className='sm:max-w-[425px]'>
                    <DialogHeader>
                        <DialogTitle>Edit profile</DialogTitle>
                        <DialogDescription>
                            Make changes to your profile here. Click save when you're done.
                        </DialogDescription>
                    </DialogHeader>
                    <DialogFooter>
                        <DialogClose asChild>
                            <Button>
                                <Text>OK</Text>
                            </Button>
                        </DialogClose>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </View>

        <View className='bg-blue-200'>
            <Text className='text-red-500'>test</Text>
            <Text className='text-red-500'>test</Text>
            <Text className='text-red-500'>test</Text>
        </View>

        <View>
            <AlertDialog>
                <AlertDialogTrigger asChild>
                    <Button variant='outline'>
                        <Text>Show Alert Dialog</Text>
                    </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                    <AlertDialogHeader  >
                        <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                        <AlertDialogDescription>
                            This action cannot be undone. This will permanently delete your account and remove
                            your data from our servers.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel >
                            <Text >Cancel</Text>
                        </AlertDialogCancel>
                        <AlertDialogAction asChild>
                            <Button onPress={(e) => {
                                console.log("123");
                                e.preventDefault()
                            }}>

                                <Text >Continue</Text>
                            </Button>
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </View>
    </SafeAreaView>
}
export default Home