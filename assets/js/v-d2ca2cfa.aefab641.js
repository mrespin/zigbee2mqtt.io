"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[59101],{587810:(e,t,n)=>{n.r(t),n.d(t,{data:()=>o});const o=JSON.parse('{"key":"v-d2ca2cfa","path":"/devices/InstaRemote.html","title":"Insta InstaRemote control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Insta InstaRemote control via MQTT","description":"Integrate your Insta InstaRemote via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2020-04-08T17:49:06.000Z"},"excerpt":"","headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Transmitters Loosing Connection in ZigBee 3 Networks","slug":"transmitters-loosing-connection-in-zigbee-3-networks","link":"#transmitters-loosing-connection-in-zigbee-3-networks","children":[]},{"level":3,"title":"Factory Reset (8-Button Devices)","slug":"factory-reset-8-button-devices","link":"#factory-reset-8-button-devices","children":[]},{"level":3,"title":"Join Network (8-Button Devices)","slug":"join-network-8-button-devices","link":"#join-network-8-button-devices","children":[]},{"level":3,"title":"OTA","slug":"ota","link":"#ota","children":[]}]},{"level":2,"title":"OTA updates","slug":"ota-updates","link":"#ota-updates","children":[]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Action (enum)","slug":"action-enum","link":"#action-enum","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1720256203000},"filePathRelative":"devices/InstaRemote.md"}')},609336:(e,t,n)=>{n.r(t),n.d(t,{default:()=>k});var o=n(166252);const i=n.p+"assets/img/InstaRemote-reset.3ef593ac.jpg",a=n.p+"assets/img/InstaRemote-join-network.10877cc8.jpg",s=(0,o._)("h1",{id:"insta-instaremote",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#insta-instaremote","aria-hidden":"true"},"#"),(0,o.Uk)(" Insta InstaRemote")],-1),r=(0,o._)("thead",null,[(0,o._)("tr",null,[(0,o._)("th"),(0,o._)("th")])],-1),l=(0,o._)("tr",null,[(0,o._)("td",null,"Model"),(0,o._)("td",null,"InstaRemote")],-1),d=(0,o._)("td",null,"Vendor",-1),c=(0,o._)("tr",null,[(0,o._)("td",null,"Description"),(0,o._)("td",null,"ZigBee Light Link wall/handheld transmitter")],-1),u=(0,o._)("tr",null,[(0,o._)("td",null,"Exposes"),(0,o._)("td",null,"action, linkquality")],-1),h=(0,o._)("tr",null,[(0,o._)("td",null,"Picture"),(0,o._)("td",null,[(0,o._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/InstaRemote.png",alt:"Insta InstaRemote"})])],-1),p=(0,o._)("tr",null,[(0,o._)("td",null,"White-label"),(0,o._)("td",null,"Gira 2430-100, Gira 2435-10, Jung ZLLCD5004M, Jung ZLLLS5004M, Jung ZLLA5004M, Jung ZLLHS4")],-1),m=(0,o.uE)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="transmitters-loosing-connection-in-zigbee-3-networks" tabindex="-1"><a class="header-anchor" href="#transmitters-loosing-connection-in-zigbee-3-networks" aria-hidden="true">#</a> Transmitters Loosing Connection in ZigBee 3 Networks</h3><p>With their factory firmware, the transmitters loose network connection after a few hours when ZigBee 3 devices are present in the network (which is a pretty much standard nowadays). For the Jung wall and handheld transmitters there is a firmware update available that fixes this problem (see <a href="#ota-updates">OTA updates</a> below), but in turn decreases battery lifetime down to a few months.</p><p>Unfortunately Gira seems to have dropped support for their ZigBee transmitters completely and does not offer any firmware updates at all. For the Gira handheld transmitter the Jung update seems to work (and to fix the problem), but for the Gira wall transmitter this is not the case (it only has 6 buttons instead of 8 on the Jung wall transmitter and would therefore need a different firmware). There does not seem to be real solution for this problem rendering the Gira wall transmitters pretty much useless nowadays.</p><h3 id="factory-reset-8-button-devices" tabindex="-1"><a class="header-anchor" href="#factory-reset-8-button-devices" aria-hidden="true">#</a> Factory Reset (8-Button Devices)</h3><ul><li>Press and hold buttons <code>3</code> and <code>4</code> simultaneously for about 10 seconds until the green LEDs start to flash.</li><li>Release buttons <code>3</code> and <code>4</code> and then briefly press button <code>O</code> within 10 seconds.</li><li>The LEDs should light up green for 3 seconds and the transmitter has been reset. <img src="'+i+'" alt="Reset"></li></ul><h3 id="join-network-8-button-devices" tabindex="-1"><a class="header-anchor" href="#join-network-8-button-devices" aria-hidden="true">#</a> Join Network (8-Button Devices)</h3><ul><li>Press and hold buttons <code>5</code> and <code>I</code> simultaneously until the green LEDs start to flash. Then release the buttons again.</li><li>After 10 more seconds the transmitter will start to search for an open network in order to join it.</li><li>If the transmitter was able to join a network, the LEDs will light up green for 3 seconds (otherwise the LEDs will flash red quickly for 3 seconds). <img src="'+a+'" alt="Join Network"></li></ul><h3 id="ota" tabindex="-1"><a class="header-anchor" href="#ota" aria-hidden="true">#</a> OTA</h3><p>For the device to ask for/accept OTA updates, it needs to be in &quot;programming mode&quot; (same mode as for joining a network, see above). In case the device does still not accept updates or seems to be stuck somehow, it may help to do a factory reset, join the network again and then again enter programming mode before starting the OTA update again.</p>',10),g=(0,o._)("h2",{id:"ota-updates",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#ota-updates","aria-hidden":"true"},"#"),(0,o.Uk)(" OTA updates")],-1),f=(0,o._)("h2",{id:"options",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,o.Uk)(" Options")],-1),w=(0,o.uE)('<ul><li><code>legacy</code>: Set to false to disable the legacy integration (highly recommended), will change structure of the published payload (default true). The value must be <code>true</code> or <code>false</code></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="action-enum" tabindex="-1"><a class="header-anchor" href="#action-enum" aria-hidden="true">#</a> Action (enum)</h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>select_0</code>, <code>select_1</code>, <code>select_2</code>, <code>select_3</code>, <code>select_4</code>, <code>select_5</code>, <code>on</code>, <code>off</code>, <code>down</code>, <code>up</code>, <code>stop</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',6),b={},k=(0,n(983744).Z)(b,[["render",function(e,t){const n=(0,o.up)("RouterLink");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o.kq)(" !!!! "),(0,o.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,o.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,o.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,o.kq)(" !!!! "),s,(0,o._)("table",null,[r,(0,o._)("tbody",null,[l,(0,o._)("tr",null,[d,(0,o._)("td",null,[(0,o.Wm)(n,{to:"/supported-devices/#v=Insta"},{default:(0,o.w5)((()=>[(0,o.Uk)("Insta")])),_:1})])]),c,u,h,p])]),(0,o.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),m,(0,o.kq)(" Notes END: Do not edit below this line "),g,(0,o._)("p",null,[(0,o.Uk)("This device supports OTA updates, for more information see "),(0,o.Wm)(n,{to:"/guide/usage/ota_updates.html"},{default:(0,o.w5)((()=>[(0,o.Uk)("OTA updates")])),_:1}),(0,o.Uk)(".")]),f,(0,o._)("p",null,[(0,o._)("em",null,[(0,o.Wm)(n,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,o.w5)((()=>[(0,o.Uk)("How to use device type specific configuration")])),_:1})])]),w])}]])}}]);