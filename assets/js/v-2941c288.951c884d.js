"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[21919],{98010:(e,t,o)=>{o.r(t),o.d(t,{data:()=>i});const i=JSON.parse('{"key":"v-2941c288","path":"/devices/PCI_E.html","title":"WETEN PCI E control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"WETEN PCI E control via MQTT","description":"Integrate your WETEN PCI E via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2024-01-31T20:08:00.000Z"},"excerpt":"","headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Pairing","slug":"pairing","link":"#pairing","children":[]}]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Switch","slug":"switch","link":"#switch","children":[]},{"level":3,"title":"Restart mode (enum)","slug":"restart-mode-enum","link":"#restart-mode-enum","children":[]},{"level":3,"title":"Rf pairing (binary)","slug":"rf-pairing-binary","link":"#rf-pairing-binary","children":[]},{"level":3,"title":"Rf remote control (binary)","slug":"rf-remote-control-binary","link":"#rf-remote-control-binary","children":[]},{"level":3,"title":"Buzzer feedback (binary)","slug":"buzzer-feedback-binary","link":"#buzzer-feedback-binary","children":[]},{"level":3,"title":"Power on behavior (enum)","slug":"power-on-behavior-enum","link":"#power-on-behavior-enum","children":[]},{"level":3,"title":"Child lock (binary)","slug":"child-lock-binary","link":"#child-lock-binary","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1720256203000},"filePathRelative":"devices/PCI_E.md"}')},185897:(e,t,o)=>{o.r(t),o.d(t,{default:()=>g});var i=o(166252);const a=(0,i._)("h1",{id:"weten-pci-e",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#weten-pci-e","aria-hidden":"true"},"#"),(0,i.Uk)(" WETEN PCI E")],-1),r=(0,i._)("thead",null,[(0,i._)("tr",null,[(0,i._)("th"),(0,i._)("th")])],-1),d=(0,i._)("tr",null,[(0,i._)("td",null,"Model"),(0,i._)("td",null,"PCI E")],-1),n=(0,i._)("td",null,"Vendor",-1),l=(0,i._)("tr",null,[(0,i._)("td",null,"Description"),(0,i._)("td",null,"Remote Control PCI E Card for PC")],-1),c=(0,i._)("tr",null,[(0,i._)("td",null,"Exposes"),(0,i._)("td",null,"switch (state), restart_mode, rf_pairing, rf_remote_control, buzzer_feedback, power_on_behavior, child_lock, linkquality")],-1),s=(0,i._)("tr",null,[(0,i._)("td",null,"Picture"),(0,i._)("td",null,[(0,i._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/PCI-E.png",alt:"WETEN PCI E"})])],-1),h=(0,i._)("tr",null,[(0,i._)("td",null,"White-label"),(0,i._)("td",null,"Weten Tuya PRO")],-1),u=(0,i._)("h2",{id:"notes",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#notes","aria-hidden":"true"},"#"),(0,i.Uk)(" Notes")],-1),b=(0,i._)("h3",{id:"pairing",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#pairing","aria-hidden":"true"},"#"),(0,i.Uk)(" Pairing")],-1),p=(0,i._)("p",null,"Long press the reset button for 5s until the LED indicator flashes three times, which means the device has entered pairing mode. If buzzer feedback is on then you'll also hear 3 short beeps. The reset button can be found on the PCIe card.",-1),f=(0,i.uE)('<h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="switch" tabindex="-1"><a class="header-anchor" href="#switch" aria-hidden="true">#</a> Switch</h3><p>The current state of this switch is in the published state under the <code>state</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;ON&quot;}</code>, <code>{&quot;state&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state&quot;: &quot;TOGGLE&quot;}</code>. It&#39;s not possible to read (<code>/get</code>) this value.</p><h3 id="restart-mode-enum" tabindex="-1"><a class="header-anchor" href="#restart-mode-enum" aria-hidden="true">#</a> Restart mode (enum)</h3><p>Restart Mode. Value can be found in the published state on the <code>restart_mode</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;restart_mode&quot;: NEW_VALUE}</code>. The possible values are: <code>restart</code>, <code>force restart</code>, <code>–</code>.</p><h3 id="rf-pairing-binary" tabindex="-1"><a class="header-anchor" href="#rf-pairing-binary" aria-hidden="true">#</a> Rf pairing (binary)</h3><p>Enables/disables RF 433 remote pairing mode. Value can be found in the published state on the <code>rf_pairing</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;rf_pairing&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> rf pairing is ON, if <code>OFF</code> OFF.</p><h3 id="rf-remote-control-binary" tabindex="-1"><a class="header-anchor" href="#rf-remote-control-binary" aria-hidden="true">#</a> Rf remote control (binary)</h3><p>Enables/disables RF 433 remote control. Value can be found in the published state on the <code>rf_remote_control</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;rf_remote_control&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> rf remote control is ON, if <code>OFF</code> OFF.</p><h3 id="buzzer-feedback-binary" tabindex="-1"><a class="header-anchor" href="#buzzer-feedback-binary" aria-hidden="true">#</a> Buzzer feedback (binary)</h3><p>Enable buzzer feedback.. Value can be found in the published state on the <code>buzzer_feedback</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;buzzer_feedback&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> buzzer feedback is ON, if <code>OFF</code> OFF.</p><h3 id="power-on-behavior-enum" tabindex="-1"><a class="header-anchor" href="#power-on-behavior-enum" aria-hidden="true">#</a> Power on behavior (enum)</h3><p>Power On Behavior. Value can be found in the published state on the <code>power_on_behavior</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;power_on_behavior&quot;: NEW_VALUE}</code>. The possible values are: <code>on</code>, <code>off</code>.</p><h3 id="child-lock-binary" tabindex="-1"><a class="header-anchor" href="#child-lock-binary" aria-hidden="true">#</a> Child lock (binary)</h3><p>Enables/disables physical input on the device. Value can be found in the published state on the <code>child_lock</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;child_lock&quot;: NEW_VALUE}</code>. If value equals <code>LOCK</code> child lock is ON, if <code>UNLOCK</code> OFF.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',17),m={},g=(0,o(983744).Z)(m,[["render",function(e,t){const o=(0,i.up)("RouterLink");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i.kq)(" !!!! "),(0,i.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,i.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,i.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,i.kq)(" !!!! "),a,(0,i._)("table",null,[r,(0,i._)("tbody",null,[d,(0,i._)("tr",null,[n,(0,i._)("td",null,[(0,i.Wm)(o,{to:"/supported-devices/#v=WETEN"},{default:(0,i.w5)((()=>[(0,i.Uk)("WETEN")])),_:1})])]),l,c,s,h])]),(0,i.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),u,b,p,(0,i.kq)(" Notes END: Do not edit below this line "),f])}]])}}]);