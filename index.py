import usb
import time
import sys, json

array = sys.argv
array = array[1:len(array)]
buttons = []
print(len(array),array)
if(len(array) != 11) :
    buttons = [0,0,0,0,0,0,0,0,0,0,0] 
else :
    buttons = [int(i) for i in array]
####################################
def find_mcu_boards():
    '''
    Find all Practicum MCU boards attached to the machine, then return a list
    of USB device handles for all the boards

    >>> devices = find_mcu_boards()
    >>> first_board = McuBoard(devices[0])
    '''
    boards = [dev for bus in usb.busses()
                  for dev in bus.devices
                  if (dev.idVendor,dev.idProduct) == (0x16c0,0x05dc)]
    return boards

####################################
class McuBoard:
    '''
    Generic class for accessing Practicum MCU board via USB connection.
    '''

    ################################
    def __init__(self, dev):
        self.device = dev
        self.handle = dev.open()

    ################################
    def usb_write(self, request, data=[], index=0, value=0):
        '''
        Send data output to the USB device (i.e., MCU board)
           request: request number to appear as bRequest field on the USB device
           index: 16-bit value to appear as wIndex field on the USB device
           value: 16-bit value to appear as wValue field on the USB device
        '''
        reqType = usb.TYPE_VENDOR | usb.RECIP_DEVICE | usb.ENDPOINT_OUT
        self.handle.controlMsg(
                reqType, request, data, value=value, index=index)

    ################################
    def usb_read(self, request, length=1, index=0, value=0):
        '''
        Request data input from the USB device (i.e., MCU board)
           request: request number to appear as bRequest field on the USB device
           length: number of bytes to read from the USB device
           index: 16-bit value to appear as wIndex field on the USB device
           value: 16-bit value to appear as wValue field on the USB device

        If successful, the method returns a tuple of length specified
        containing data returned from the MCU board.
        '''
        reqType = usb.TYPE_VENDOR | usb.RECIP_DEVICE | usb.ENDPOINT_IN
        buf = self.handle.controlMsg(
                reqType, request, length, value=value, index=index)
        return buf

boards = find_mcu_boards()
boardOutput = 0
boardInput = 0

if(boards[0].deviceVersion == '02.00') :
    boardOutput = McuBoard(boards[1])
    boardInput = McuBoard(boards[0])
else :
    boardOutput = McuBoard(boards[0])
    boardInput = McuBoard(boards[1])
lastKey = 0

while(1) :
    key = int(boardInput.usb_read(10)[0])
    if(lastKey != key):
        print(buttons)
        boardOutput.usb_write(10,index=key,value=buttons[key-1])
        lastKey = key
    time.sleep(1/250)
