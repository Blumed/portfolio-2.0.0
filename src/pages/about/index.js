import React from "react"
import Link from "gatsby-link"
import get from "lodash/get"
import Helmet from "react-helmet"

import {rhythm} from "../../utils/typography"
import Instafeed from "react-instafeed"
import { Timeline } from "react-twitter-widgets"
import LastFM from "../../utils/lastFM"
import "../../stylesheets/scss/config.scss"

class About extends React.Component {
    render() {
        // console.log("props", this.props)
        const pageLinks = []
        const siteTitle = get(this, "props.data.site.siteMetadata.title")
        const instafeedTarget = 'instafeed'

        return (
            <div className="clear">
                <Helmet title={get(this, "props.data.site.siteMetadata.title")} />
                <div className="-hidden-wrap" style={{ overflow: "hidden" }}>
                    <figure className="me-yo"  id="selfie" style={{
                        width: "100%",
                        display: "block",
                        borderRadius: "0",
                    clipPath: "polygon(50% 0,100% 25%,100% 75%,50% 100%,0 75%,0 25%)"
                                    }}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            version="1.1"
                            className="sup-yo polylion"
                            viewBox="0 0 720 500"
                            preserveAspectRatio="xMidYMid meet">
                            <g transform="scale(2.5) translate(0.5 0.5)">
                                <polygon fill="#121212" fillOpacity="0.501961" points="155,-2 69,44 114,271"/>
                                <polygon fill="#ffffff" fillOpacity="0.501961" points="12,271 101,-16 -16,3"/>
                                <polygon
                                    fill="#545454"
                                    fillOpacity="0.501961"
                                    points="145,116 164,271 -9,256"/>
                                <polygon
                                    fill="#ffffff"
                                    fillOpacity="0.501961"
                                    points="238,-16 169,186 271,240"/>
                                <polygon fill="#ffffff" fillOpacity="0.501961" points="-12,246 100,167 6,-16"/>
                                <polygon fill="#e2e2e2" fillOpacity="0.501961" points="122,94 271,-10 117,42"/>
                                <polygon fill="#313131" fillOpacity="0.501961" points="63,203 154,80 105,225"/>
                                <polygon fill="#000000" fillOpacity="0.501961" points="136,8 90,25 71,121"/>
                                <polygon fill="#ffffff" fillOpacity="0.501961" points="212,61 232,-2 120,-12"/>
                                <polygon
                                    fill="#f9f9f9"
                                    fillOpacity="0.501961"
                                    points="146,232 161,195 98,188"/>
                                <polygon
                                    fill="#909090"
                                    fillOpacity="0.501961"
                                    points="106,138 175,116 174,232"/>
                                <polygon fill="#ffffff" fillOpacity="0.501961" points="56,-16 -16,240 81,185"/>
                                <polygon fill="#7d7d7d" fillOpacity="0.501961" points="197,69 152,99 153,2"/>
                                <polygon
                                    fill="#f3f3f3"
                                    fillOpacity="0.501961"
                                    points="236,249 188,49 271,-10"/>
                                <polygon fill="#ffffff" fillOpacity="0.501961" points="-8,150 1,-2 124,-12"/>
                                <polygon
                                    fill="#c3c3c3"
                                    fillOpacity="0.501961"
                                    points="133,81 109,148 108,100"/>
                                <polygon
                                    fill="#909090"
                                    fillOpacity="0.501961"
                                    points="19,271 196,238 -15,221"/>
                                <polygon
                                    fill="#454545"
                                    fillOpacity="0.501961"
                                    points="173,172 142,271 171,227"/>
                                <polygon fill="#2f2f2f" fillOpacity="0.501961" points="109,168 98,21 69,101"/>
                                <polygon fill="#111111" fillOpacity="0.501961" points="181,40 155,19 193,72"/>
                                <polygon fill="#272727" fillOpacity="0.501961" points="157,251 63,195 94,186"/>
                                <polygon fill="#ffffff" fillOpacity="0.501961" points="155,-16 58,12 177,10"/>
                                <polygon fill="#ffffff" fillOpacity="0.501961" points="-13,73 94,134 52,206"/>
                                <polygon fill="#e5e5e5" fillOpacity="0.501961" points="185,80 118,48 171,35"/>
                                <polygon
                                    fill="#0f0f0f"
                                    fillOpacity="0.501961"
                                    points="145,187 103,144 104,182"/>
                                <polygon
                                    fill="#f9f9f9"
                                    fillOpacity="0.501961"
                                    points="224,215 204,31 179,192"/>
                                <polygon
                                    fill="#353535"
                                    fillOpacity="0.501961"
                                    points="121,142 132,73 149,120"/>
                                <polygon fill="#5a5a5a" fillOpacity="0.501961" points="1,268 -5,234 29,218"/>
                                <polygon
                                    fill="#c0c0c0"
                                    fillOpacity="0.501961"
                                    points="170,256 164,139 135,148"/>
                                <polygon
                                    fill="#969696"
                                    fillOpacity="0.501961"
                                    points="94,185 107,211 119,185"/>
                                <polygon fill="#535353" fillOpacity="0.501961" points="75,118 110,40 102,145"/>
                                <polygon fill="#cacaca" fillOpacity="0.501961" points="123,42 152,33 154,117"/>
                                <polygon fill="#e4e4e4" fillOpacity="0.501961" points="151,-6 271,187 254,-7"/>
                                <polygon
                                    fill="#4d4d4d"
                                    fillOpacity="0.501961"
                                    points="105,181 172,170 133,198"/>
                                <polygon fill="#fbfbfb" fillOpacity="0.501961" points="-16,140 91,18 2,231"/>
                                <polygon
                                    fill="#b0b0b0"
                                    fillOpacity="0.501961"
                                    points="73,251 161,271 115,228"/>
                                <polygon fill="#f9f9f9" fillOpacity="0.501961" points="94,152 33,216 32,39"/>
                                <polygon
                                    fill="#ededed"
                                    fillOpacity="0.501961"
                                    points="259,242 218,203 271,115"/>
                                <polygon fill="#151515" fillOpacity="0.501961" points="95,23 71,102 129,9"/>
                                <polygon fill="#909090" fillOpacity="0.501961" points="91,145 87,113 97,102"/>
                                <polygon
                                    fill="#7f7f7f"
                                    fillOpacity="0.501961"
                                    points="173,119 142,114 179,153"/>
                                <polygon
                                    fill="#d9d9d9"
                                    fillOpacity="0.501961"
                                    points="166,112 195,146 176,46"/>
                                <polygon fill="#eeeeee" fillOpacity="0.501961" points="203,-9 133,-4 181,34"/>
                                <polygon
                                    fill="#dfdfdf"
                                    fillOpacity="0.501961"
                                    points="168,187 135,231 142,188"/>
                                <polygon fill="#2f2f2f" fillOpacity="0.501961" points="147,11 95,28 177,33"/>
                                <polygon fill="#888888" fillOpacity="0.501961" points="192,70 193,96 106,72"/>
                                <polygon fill="#f5f5f5" fillOpacity="0.501961" points="82,0 61,165 -16,-1"/>
                                <polygon
                                    fill="#fafafa"
                                    fillOpacity="0.501961"
                                    points="184,193 170,165 195,141"/>
                                <polygon fill="#414141" fillOpacity="0.501961" points="130,72 109,95 92,75"/>
                                <polygon
                                    fill="#b7b7b7"
                                    fillOpacity="0.501961"
                                    points="156,271 161,232 251,230"/>
                                <polygon fill="#cbcbcb" fillOpacity="0.501961" points="127,66 149,95 159,32"/>
                                <polygon fill="#3e3e3e" fillOpacity="0.501961" points="193,78 191,107 180,52"/>
                                <polygon fill="#dedede" fillOpacity="0.501961" points="188,93 182,72 159,79"/>
                                <polygon fill="#fdfdfd" fillOpacity="0.501961" points="0,230 79,185 -2,103"/>
                                <polygon fill="#e7e7e7" fillOpacity="0.501961" points="191,155 271,86 195,1"/>
                                <polygon fill="#909090" fillOpacity="0.501961" points="107,62 124,37 131,108"/>
                                <polygon fill="#393939" fillOpacity="0.501961" points="119,74 70,91 75,117"/>
                                <polygon
                                    fill="#c0c0c0"
                                    fillOpacity="0.501961"
                                    points="220,212 172,242 271,250"/>
                                <polygon
                                    fill="#3b3b3b"
                                    fillOpacity="0.501961"
                                    points="102,137 76,192 101,225"/>
                                <polygon
                                    fill="#505050"
                                    fillOpacity="0.501961"
                                    points="129,94 136,130 154,130"/>
                                <polygon fill="#f7f7f7" fillOpacity="0.501961" points="45,207 23,3 93,160"/>
                                <polygon fill="#444444" fillOpacity="0.501961" points="89,41 74,93 74,62"/>
                                <polygon fill="#979797" fillOpacity="0.501961" points="50,211 177,265 4,253"/>
                                <polygon fill="#dfdfdf" fillOpacity="0.501961" points="247,-9 271,168 204,12"/>
                                <polygon fill="#f0f0f0" fillOpacity="0.501961" points="54,3 105,-16 189,15"/>
                                <polygon fill="#f2f2f2" fillOpacity="0.501961" points="61,-12 118,10 2,71"/>
                                <polygon fill="#f9f9f9" fillOpacity="0.501961" points="6,228 -16,-13 80,184"/>
                                <polygon fill="#686868" fillOpacity="0.501961" points="94,235 61,196 76,188"/>
                                <polygon fill="#565656" fillOpacity="0.501961" points="131,26 93,59 96,78"/>
                                <polygon
                                    fill="#808080"
                                    fillOpacity="0.501961"
                                    points="165,178 126,203 186,136"/>
                                <polygon
                                    fill="#c8c8c8"
                                    fillOpacity="0.501961"
                                    points="145,68 145,115 167,126"/>
                                <polygon
                                    fill="#090909"
                                    fillOpacity="0.501961"
                                    points="159,210 170,198 172,185"/>
                                <polygon fill="#f5f5f5" fillOpacity="0.501961" points="18,70 80,49 59,98"/>
                                <polygon fill="#f8f8f8" fillOpacity="0.501961" points="30,196 -6,-16 94,160"/>
                                <polygon
                                    fill="#000000"
                                    fillOpacity="0.501961"
                                    points="160,241 150,270 154,213"/>
                                <polygon
                                    fill="#eeeeee"
                                    fillOpacity="0.501961"
                                    points="197,107 223,128 169,206"/>
                                <polygon
                                    fill="#909090"
                                    fillOpacity="0.501961"
                                    points="140,204 107,186 149,195"/>
                                <polygon
                                    fill="#ebebeb"
                                    fillOpacity="0.501961"
                                    points="194,155 257,242 195,29"/>
                                <polygon fill="#f5f5f5" fillOpacity="0.501961" points="62,31 73,84 45,147"/>
                                <polygon fill="#737373" fillOpacity="0.501961" points="135,229 97,195 92,163"/>
                                <polygon fill="#e5e5e5" fillOpacity="0.501961" points="248,-16 152,-8 195,65"/>
                                <polygon fill="#797979" fillOpacity="0.501961" points="-14,245 18,248 56,203"/>
                                <polygon
                                    fill="#d8d8d8"
                                    fillOpacity="0.501961"
                                    points="169,137 139,135 158,159"/>
                                <polygon fill="#b2b2b2" fillOpacity="0.501961" points="47,216 34,225 42,240"/>
                                <polygon fill="#ababab" fillOpacity="0.501961" points="130,36 112,64 133,75"/>
                                <polygon
                                    fill="#e5e5e5"
                                    fillOpacity="0.501961"
                                    points="239,219 268,103 228,58"/>
                                <polygon
                                    fill="#303030"
                                    fillOpacity="0.501961"
                                    points="128,214 136,237 79,203"/>
                                <polygon fill="#f7f7f7" fillOpacity="0.501961" points="39,19 77,191 -16,55"/>
                                <polygon
                                    fill="#2a2a2a"
                                    fillOpacity="0.501961"
                                    points="83,167 124,187 147,179"/>
                                <polygon fill="#c5c5c5" fillOpacity="0.501961" points="163,32 145,91 129,41"/>
                                <polygon fill="#3e3e3e" fillOpacity="0.501961" points="169,29 122,10 101,21"/>
                                <polygon fill="#f6f6f6" fillOpacity="0.501961" points="58,48 -16,18 84,169"/>
                                <polygon fill="#0f0f0f" fillOpacity="0.501961" points="137,12 85,64 98,28"/>
                                <polygon fill="#f8f8f8" fillOpacity="0.501961" points="90,137 79,184 70,116"/>
                                <polygon fill="#e7e7e7" fillOpacity="0.501961" points="98,-10 246,52 175,-3"/>
                                <polygon
                                    fill="#f0f0f0"
                                    fillOpacity="0.501961"
                                    points="200,109 172,167 227,216"/>
                                <polygon fill="#dddddd" fillOpacity="0.501961" points="245,55 258,-4 206,-14"/>
                                <polygon
                                    fill="#1a1a1a"
                                    fillOpacity="0.501961"
                                    points="111,130 131,138 116,123"/>
                                <polygon fill="#fcfcfc" fillOpacity="0.501961" points="1,229 57,200 0,134"/>
                                <polygon
                                    fill="#a5a5a5"
                                    fillOpacity="0.501961"
                                    points="127,269 153,265 87,214"/>
                                <polygon fill="#f1f1f1" fillOpacity="0.501961" points="128,-16 54,68 23,27"/>
                                <polygon
                                    fill="#ebebeb"
                                    fillOpacity="0.501961"
                                    points="249,224 193,57 200,204"/>
                                <polygon fill="#eeeeee" fillOpacity="0.501961" points="42,-16 61,23 198,-5"/>
                                <polygon fill="#9e9e9e" fillOpacity="0.501961" points="91,243 93,220 125,242"/>
                                <polygon fill="#464646" fillOpacity="0.501961" points="97,188 82,172 109,144"/>
                                <polygon fill="#868686" fillOpacity="0.501961" points="84,205 44,253 73,251"/>
                                <polygon fill="#f9f9f9" fillOpacity="0.501961" points="20,161 98,163 -1,123"/>
                                <polygon fill="#f9f9f9" fillOpacity="0.501961" points="27,219 -16,50 83,172"/>
                                <polygon fill="#4a4a4a" fillOpacity="0.501961" points="82,127 70,104 104,79"/>
                                <polygon
                                    fill="#a2a2a2"
                                    fillOpacity="0.501961"
                                    points="159,240 180,224 158,269"/>
                                <polygon
                                    fill="#cecece"
                                    fillOpacity="0.501961"
                                    points="157,160 139,174 122,156"/>
                                <polygon fill="#919191" fillOpacity="0.501961" points="17,230 110,250 1,264"/>
                                <polygon
                                    fill="#1b1b1b"
                                    fillOpacity="0.501961"
                                    points="104,227 115,220 76,191"/>
                                <polygon fill="#f7f7f7" fillOpacity="0.501961" points="79,183 28,218 86,129"/>
                                <polygon
                                    fill="#bcbcbc"
                                    fillOpacity="0.501961"
                                    points="271,257 179,236 168,201"/>
                                <polygon
                                    fill="#0b0b0b"
                                    fillOpacity="0.501961"
                                    points="131,179 110,156 109,166"/>
                                <polygon
                                    fill="#b8b8b8"
                                    fillOpacity="0.501961"
                                    points="206,207 236,222 158,242"/>
                                <polygon fill="#f7f7f7" fillOpacity="0.501961" points="87,130 56,180 45,133"/>
                                <polygon fill="#989898" fillOpacity="0.501961" points="134,252 81,233 73,262"/>
                                <polygon fill="#acacac" fillOpacity="0.501961" points="56,210 65,213 49,243"/>
                                <polygon fill="#444444" fillOpacity="0.501961" points="151,89 175,87 159,83"/>
                                <polygon fill="#dedede" fillOpacity="0.501961" points="153,69 177,65 160,35"/>
                                <polygon
                                    fill="#f3f3f3"
                                    fillOpacity="0.501961"
                                    points="207,207 177,154 178,191"/>
                                <polygon fill="#e9e9e9" fillOpacity="0.501961" points="240,148 192,76 213,55"/>
                                <polygon
                                    fill="#575757"
                                    fillOpacity="0.501961"
                                    points="116,131 144,157 127,152"/>
                                <polygon fill="#c1c1c1" fillOpacity="0.501961" points="182,64 156,105 187,95"/>
                                <polygon fill="#e9e9e9" fillOpacity="0.501961" points="179,38 191,9 220,92"/>
                                <polygon fill="#f5f5f5" fillOpacity="0.501961" points="-16,-7 46,15 74,118"/>
                                <polygon fill="#1f1f1f" fillOpacity="0.501961" points="88,106 76,61 91,68"/>
                                <polygon
                                    fill="#e5e5e5"
                                    fillOpacity="0.501961"
                                    points="168,189 142,230 130,220"/>
                                <polygon fill="#e8e8e8" fillOpacity="0.501961" points="162,-16 140,-2 214,65"/>
                                <polygon
                                    fill="#c6c6c6"
                                    fillOpacity="0.501961"
                                    points="255,271 216,211 246,228"/>
                                <polygon
                                    fill="#e8e8e8"
                                    fillOpacity="0.501961"
                                    points="255,177 206,137 254,240"/>
                                <polygon fill="#e7e7e7" fillOpacity="0.501961" points="228,87 227,39 180,40"/>
                                <polygon fill="#f8f8f8" fillOpacity="0.501961" points="1,82 85,167 55,201"/>
                                <polygon fill="#868686" fillOpacity="0.501961" points="65,194 50,253 77,241"/>
                                <polygon
                                    fill="#efefef"
                                    fillOpacity="0.501961"
                                    points="223,214 192,128 173,169"/>
                                <polygon
                                    fill="#828282"
                                    fillOpacity="0.501961"
                                    points="165,112 179,135 140,124"/>
                                <polygon fill="#f6f6f6" fillOpacity="0.501961" points="77,188 51,78 89,145"/>
                                <polygon fill="#fbfbfb" fillOpacity="0.501961" points="31,215 -2,230 3,115"/>
                                <polygon
                                    fill="#b6b6b6"
                                    fillOpacity="0.501961"
                                    points="169,201 217,262 186,264"/>
                                <polygon fill="#cdcdcd" fillOpacity="0.501961" points="158,96 166,130 147,95"/>
                                <polygon
                                    fill="#6d6d6d"
                                    fillOpacity="0.501961"
                                    points="148,144 177,130 171,124"/>
                                <polygon fill="#e5e5e5" fillOpacity="0.501961" points="184,-16 179,42 226,40"/>
                                <polygon fill="#fafafa" fillOpacity="0.501961" points="7,115 11,227 47,190"/>
                                <polygon fill="#f6f6f6" fillOpacity="0.501961" points="92,160 87,133 59,184"/>
                                <polygon
                                    fill="#e9e9e9"
                                    fillOpacity="0.501961"
                                    points="186,41 237,222 238,127"/>
                                <polygon
                                    fill="#ebebeb"
                                    fillOpacity="0.501961"
                                    points="236,221 213,208 215,134"/>
                                <polygon fill="#e2e2e2" fillOpacity="0.501961" points="214,49 201,-14 267,68"/>
                                <polygon
                                    fill="#f0f0f0"
                                    fillOpacity="0.501961"
                                    points="172,167 192,170 191,200"/>
                                <polygon fill="#f7f7f7" fillOpacity="0.501961" points="42,95 85,130 55,201"/>
                                <polygon fill="#f3f3f3" fillOpacity="0.501961" points="80,19 13,28 -11,-14"/>
                                <polygon
                                    fill="#e8e8e8"
                                    fillOpacity="0.501961"
                                    points="211,71 169,-13 133,-16"/>
                                <polygon
                                    fill="#e2e2e2"
                                    fillOpacity="0.501961"
                                    points="184,84 180,126 167,110"/>
                                <polygon fill="#4c4c4c" fillOpacity="0.501961" points="100,26 78,48 86,34"/>
                                <polygon
                                    fill="#aaaaaa"
                                    fillOpacity="0.501961"
                                    points="123,142 107,129 112,151"/>
                                <polygon fill="#f2f2f2" fillOpacity="0.501961" points="-7,2 88,33 60,-10"/>
                                <polygon
                                    fill="#efefef"
                                    fillOpacity="0.501961"
                                    points="200,163 177,157 193,130"/>
                                <polygon fill="#5c5c5c" fillOpacity="0.501961" points="84,95 82,87 85,83"/>
                                <polygon fill="#eeeeee" fillOpacity="0.501961" points="119,9 91,-16 74,31"/>
                                <polygon fill="#fbfbfb" fillOpacity="0.501961" points="0,230 26,202 6,127"/>
                                <polygon fill="#f3f3f3" fillOpacity="0.501961" points="77,39 66,99 50,38"/>
                                <polygon fill="#f8f8f8" fillOpacity="0.501961" points="73,180 35,91 51,204"/>
                                <polygon
                                    fill="#e6e6e6"
                                    fillOpacity="0.501961"
                                    points="222,105 271,153 259,223"/>
                                <polygon fill="#f9f9f9" fillOpacity="0.501961" points="31,184 51,205 44,124"/>
                                <polygon
                                    fill="#e7e7e7"
                                    fillOpacity="0.501961"
                                    points="269,229 245,229 234,202"/>
                                <polygon fill="#f5f5f5" fillOpacity="0.501961" points="66,135 59,84 95,167"/>
                                <polygon
                                    fill="#b5b5b5"
                                    fillOpacity="0.501961"
                                    points="194,100 169,147 184,145"/>
                                <polygon
                                    fill="#b9b9b9"
                                    fillOpacity="0.501961"
                                    points="190,221 180,244 172,177"/>
                                <polygon
                                    fill="#e1e1e1"
                                    fillOpacity="0.501961"
                                    points="271,68 269,131 206,-11"/>
                                <polygon fill="#5f5f5f" fillOpacity="0.501961" points="152,79 174,71 152,71"/>
                                <polygon fill="#fbfbfb" fillOpacity="0.501961" points="25,220 -9,184 10,137"/>
                                <polygon fill="#f6f6f6" fillOpacity="0.501961" points="62,149 63,158 92,146"/>
                                <polygon
                                    fill="#e4e4e4"
                                    fillOpacity="0.501961"
                                    points="266,122 228,49 259,190"/>
                                <polygon fill="#bdbdbd" fillOpacity="0.501961" points="122,52 150,54 154,86"/>
                                <polygon fill="#e6e6e6" fillOpacity="0.501961" points="224,45 200,14 213,66"/>
                                <polygon fill="#b5b5b5" fillOpacity="0.501961" points="147,70 145,58 152,59"/>
                                <polygon fill="#fbfbfb" fillOpacity="0.501961" points="33,214 -16,149 0,228"/>
                                <polygon
                                    fill="#6b6b6b"
                                    fillOpacity="0.501961"
                                    points="190,88 187,112 193,109"/>
                                <polygon
                                    fill="#070707"
                                    fillOpacity="0.501961"
                                    points="141,113 124,121 145,119"/>
                                <polygon
                                    fill="#bebebe"
                                    fillOpacity="0.501961"
                                    points="167,202 202,240 180,193"/>
                                <polygon fill="#858585" fillOpacity="0.501961" points="97,159 93,112 86,129"/>
                                <polygon
                                    fill="#d4d4d4"
                                    fillOpacity="0.501961"
                                    points="193,104 195,116 188,123"/>
                                <polygon
                                    fill="#f0f0f0"
                                    fillOpacity="0.501961"
                                    points="173,167 209,209 187,138"/>
                                <polygon fill="#656565" fillOpacity="0.501961" points="97,82 112,113 88,107"/>
                                <polygon
                                    fill="#efefef"
                                    fillOpacity="0.501961"
                                    points="177,192 201,195 197,105"/>
                                <polygon
                                    fill="#535353"
                                    fillOpacity="0.501961"
                                    points="124,144 122,137 149,142"/>
                                <polygon fill="#f7f7f7" fillOpacity="0.501961" points="89,137 80,128 48,159"/>
                                <polygon
                                    fill="#d3d3d3"
                                    fillOpacity="0.501961"
                                    points="159,135 146,141 131,138"/>
                                <polygon fill="#f9f9f9" fillOpacity="0.501961" points="22,210 54,201 42,105"/>
                                <polygon fill="#686868" fillOpacity="0.501961" points="26,223 27,245 35,218"/>
                                <polygon fill="#ededed" fillOpacity="0.501961" points="86,9 100,-6 149,10"/>
                                <polygon fill="#c8c8c8" fillOpacity="0.501961" points="139,37 135,77 166,35"/>
                                <polygon
                                    fill="#efefef"
                                    fillOpacity="0.501961"
                                    points="194,201 201,187 178,152"/>
                                <polygon fill="#e5e5e5" fillOpacity="0.501961" points="245,115 232,49 208,41"/>
                                <polygon
                                    fill="#e8e8e8"
                                    fillOpacity="0.501961"
                                    points="169,-16 189,30 107,-10"/>
                                <polygon fill="#f4f4f4" fillOpacity="0.501961" points="69,59 51,81 73,88"/>
                                <polygon fill="#6b6b6b" fillOpacity="0.501961" points="91,40 78,61 83,42"/>
                                <polygon
                                    fill="#eeeeee"
                                    fillOpacity="0.501961"
                                    points="191,124 215,209 181,157"/>
                                <polygon
                                    fill="#f0f0f0"
                                    fillOpacity="0.501961"
                                    points="175,176 196,191 185,143"/>
                            </g>
                        </svg>
                        <div className="backdrop"></div>
                    </figure>
                </div>
                <section>
                    <p>Hey there! Thanks for stopping by. Allow me to tell you a little about
                        myself. Born and raised in Minneapolis, Minnesota. I am 100% self taught so I
                        code a lot during my free time. Besides coding I like to
                        <a href="https://www.instagram.com/p/dbNhDmFNgX/">skateboard</a>
                        and
                        <a href="https://youtu.be/qbZn07rZJ88">bike</a>
                        everywhere all year round. Main purpose of this site is to organize my thoughts
                        about web development. Show my work and to flex my self expression muscle.</p>
                </section>
                <section>
                    <h3>Nerd Stuff</h3>
                    <ul>
                        <li>Currently using
                            <a href="https://github.com/sondr3/generator-jekyllized">Jekyllized</a>, which is a
                            <a href="http://jekyllrb.com">Jekyll</a>
                            and
                            <a href="http://gulpjs.com/">gulp</a>
                            build system</li>
                        <li>My IDE of choice is of course
                            <a href="http://www.sublimetext.com/">Sublime Text 3</a>
                        </li>
                        <li>Favorite
                            <a href="http://www.sublimetext.com/">Sublime Text</a>
                            themes are
                            <a href="http://kkga.github.io/spacegray/">Space Gray</a>
                            and
                            <a href="http://equinusocio.github.io/material-theme/">Material Design</a>
                        </li>
                        <li>Sites hosted by
                            <a href="https://mediatemple.net/">Media Temple</a>
                            since the begining</li>
                        <li>I love unix!</li>
                        <li>Version Controlled with
                            <a href="https://github.com/Blumed/portfolio">git</a>
                        </li>
                        <li>My fuel of choice is the blackest office coffee while listening to
                            <a href="http://4ad.com/artists/arielpinkshauntedgraffiti">Arial Pinks Haunted Graffiti</a>
                        </li>
                        <li>If you would like to know even more nerdy facts about my site feel free to
                            peep my file.</li>
                        <a href="/humans.txt">humans.txt</a>
                        <li>This site has a public
                            <a href="https://trello.com/b/WXxWYHWj">Trello board</a>
                            if you have nothing else goig on feel free to check it out.</li>
                    </ul>
                </section>
                <section>
                    <h3>Music</h3>
                    <div className="music-list">
                        <div id="row-one"></div>
                        <LastFM />
                    </div>
                    {/* <!-- <ol className="list" id="listTopArtists"></ol> --> */}
                </section>
                <section>
                    <h3>Instagram</h3>
                    <div id="instafeed" className="-instagram clear"></div>
                         <Instafeed
        limit='8'
        ref='instafeed'
        resolution='standard_resolution'
        sortBy='most-recent'
        target={instafeedTarget}
        template='<a href="{{link}}"><img class="img-grow" src="{{image}}" /></a>'
        userId='32649960'
        clientId='copcircles'
        accessToken='32649960.52a6938.c901358281534e5c8cb3f4712ef284c4'
      />
                </section>
                <section>
                    <h3>Twitter</h3>
                  <Timeline
    dataSource={{
      sourceType: 'profile',
      screenName: 'CullanLuther'
    }}
    options={{
      username: 'CullanLuther',
      height: '400'
    }}
    onLoad={() => console.log('Timeline is loaded!')}
  />
                        
                   
                </section>
            </div>
        )
    }
}
About.propTypes = {
    route: React.PropTypes.object,
}

            export default About // export const pageQuery = graphql` // query IndexQuery {//     site {       siteMetadata {         title       }     }
            // allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
            //  edges {         node {           frontmatter {             path           }
            //          frontmatter {             title           }         }       }     }
            //}