"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[12024],{719109:(e,t,i)=>{i.r(t),i.d(t,{data:()=>o});const o=JSON.parse('{"key":"v-72a798bf","path":"/devices/E2112.html","title":"IKEA E2112 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"IKEA E2112 control via MQTT","description":"Integrate your IKEA E2112 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2023-03-01T15:36:39.000Z"},"excerpt":"","headers":[{"level":2,"title":"Device is not reporting with decimal points precision","slug":"device-is-not-reporting-with-decimal-points-precision","link":"#device-is-not-reporting-with-decimal-points-precision","children":[]},{"level":2,"title":"Pairing","slug":"pairing","link":"#pairing","children":[]},{"level":2,"title":"OTA updates","slug":"ota-updates","link":"#ota-updates","children":[]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Temperature (numeric)","slug":"temperature-numeric","link":"#temperature-numeric","children":[]},{"level":3,"title":"Humidity (numeric)","slug":"humidity-numeric","link":"#humidity-numeric","children":[]},{"level":3,"title":"Pm25 (numeric)","slug":"pm25-numeric","link":"#pm25-numeric","children":[]},{"level":3,"title":"VOC index (numeric)","slug":"voc-index-numeric","link":"#voc-index-numeric","children":[]},{"level":3,"title":"Identify (enum)","slug":"identify-enum","link":"#identify-enum","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1720256203000},"filePathRelative":"devices/E2112.md"}')},712868:(e,t,i)=>{i.r(t),i.d(t,{default:()=>y});var o=i(166252);const a=(0,o._)("h1",{id:"ikea-e2112",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#ikea-e2112","aria-hidden":"true"},"#"),(0,o.Uk)(" IKEA E2112")],-1),n=(0,o._)("thead",null,[(0,o._)("tr",null,[(0,o._)("th"),(0,o._)("th")])],-1),d=(0,o._)("tr",null,[(0,o._)("td",null,"Model"),(0,o._)("td",null,"E2112")],-1),r=(0,o._)("td",null,"Vendor",-1),l=(0,o._)("tr",null,[(0,o._)("td",null,"Description"),(0,o._)("td",null,"VINDSTYRKA air quality and humidity sensor")],-1),u=(0,o._)("tr",null,[(0,o._)("td",null,"Exposes"),(0,o._)("td",null,"temperature, humidity, pm25, voc_index, identify, linkquality")],-1),s=(0,o._)("tr",null,[(0,o._)("td",null,"Picture"),(0,o._)("td",null,[(0,o._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/E2112.png",alt:"IKEA E2112"})])],-1),c=(0,o._)("h1",{id:"notes",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#notes","aria-hidden":"true"},"#"),(0,o.Uk)(" Notes")],-1),h=(0,o._)("h2",{id:"device-is-not-reporting-with-decimal-points-precision",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#device-is-not-reporting-with-decimal-points-precision","aria-hidden":"true"},"#"),(0,o.Uk)(" Device is not reporting with decimal points precision")],-1),p={href:"https://github.com/Koenkk/zigbee2mqtt/issues/17636",target:"_blank",rel:"noopener noreferrer"},m=(0,o._)("br",null,null,-1),f=(0,o._)("h2",{id:"pairing",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#pairing","aria-hidden":"true"},"#"),(0,o.Uk)(" Pairing")],-1),v=(0,o._)("p",null,"Pair the sensor to Zigbee2MQTT by quickly pressing the pair button 4x to get it connected.",-1),b=(0,o._)("h2",{id:"ota-updates",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#ota-updates","aria-hidden":"true"},"#"),(0,o.Uk)(" OTA updates")],-1),g=(0,o._)("h2",{id:"options",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,o.Uk)(" Options")],-1),k=(0,o.uE)('<ul><li><p><code>temperature_calibration</code>: Calibrates the temperature value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>temperature_precision</code>: Number of digits after decimal point for temperature, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>humidity_calibration</code>: Calibrates the humidity value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>humidity_precision</code>: Number of digits after decimal point for humidity, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>pm25_calibration</code>: Calibrates the pm25 value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>identify_timeout</code>: Sets the duration of the identification procedure in seconds (i.e., how long the device would flash).The value ranges from 1 to 30 seconds (default: 3). The value must be a number with a minimum value of <code>1</code> and with a with a maximum value of <code>30</code></p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="temperature-numeric" tabindex="-1"><a class="header-anchor" href="#temperature-numeric" aria-hidden="true">#</a> Temperature (numeric)</h3><p>Measured temperature value. Value can be found in the published state on the <code>temperature</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;temperature&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The unit of this value is <code>°C</code>.</p><h3 id="humidity-numeric" tabindex="-1"><a class="header-anchor" href="#humidity-numeric" aria-hidden="true">#</a> Humidity (numeric)</h3><p>Measured relative humidity. Value can be found in the published state on the <code>humidity</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;humidity&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The unit of this value is <code>%</code>.</p><h3 id="pm25-numeric" tabindex="-1"><a class="header-anchor" href="#pm25-numeric" aria-hidden="true">#</a> Pm25 (numeric)</h3><p>Measured PM2.5 (particulate matter) concentration. Value can be found in the published state on the <code>pm25</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;pm25&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The unit of this value is <code>µg/m³</code>.</p><h3 id="voc-index-numeric" tabindex="-1"><a class="header-anchor" href="#voc-index-numeric" aria-hidden="true">#</a> VOC index (numeric)</h3><p>Sensirion VOC index. Value can be found in the published state on the <code>voc_index</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p><h3 id="identify-enum" tabindex="-1"><a class="header-anchor" href="#identify-enum" aria-hidden="true">#</a> Identify (enum)</h3><p>Initiate device identification. Value will <strong>not</strong> be published in the state. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;identify&quot;: NEW_VALUE}</code>. The possible values are: <code>identify</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',14),_={},y=(0,i(983744).Z)(_,[["render",function(e,t){const i=(0,o.up)("RouterLink"),_=(0,o.up)("ExternalLinkIcon");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o.kq)(" !!!! "),(0,o.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,o.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,o.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,o.kq)(" !!!! "),a,(0,o._)("table",null,[n,(0,o._)("tbody",null,[d,(0,o._)("tr",null,[r,(0,o._)("td",null,[(0,o.Wm)(i,{to:"/supported-devices/#v=IKEA"},{default:(0,o.w5)((()=>[(0,o.Uk)("IKEA")])),_:1})])]),l,u,s])]),(0,o.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),c,h,(0,o._)("p",null,[(0,o._)("a",p,[(0,o.Uk)("It's been reported by several people that this device does not report with decimal precision"),(0,o.Wm)(_)]),(0,o.Uk)("."),m,(0,o.Uk)(" Even though the device has the option to set the number of digits after the decimal for both temperature and humidity, it does not report with decimals. So unless IKEA chooses to fix this with a firmware update, this will not work.")]),f,v,(0,o.kq)(" Notes END: Do not edit below this line "),b,(0,o._)("p",null,[(0,o.Uk)("This device supports OTA updates, for more information see "),(0,o.Wm)(i,{to:"/guide/usage/ota_updates.html"},{default:(0,o.w5)((()=>[(0,o.Uk)("OTA updates")])),_:1}),(0,o.Uk)(".")]),g,(0,o._)("p",null,[(0,o._)("em",null,[(0,o.Wm)(i,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,o.w5)((()=>[(0,o.Uk)("How to use device type specific configuration")])),_:1})])]),k])}]])}}]);