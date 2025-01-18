import React from "react";
import Legend from "./Legend.tsx";

const convertFeetToPixels = (feet: number) => (feet * 30);

const showLongRulers = true

const Circle = (props: { cx: number, cy: number, d: number, label: string }) => {
  const {cx, cy, d} = props;
  return (<>
        <circle cx={cx} cy={cy} r={d * .5} stroke={"black"} strokeWidth={1}/>
        <circle cx={cx} cy={cy} r={3} fill={"black"}/>
        <text fill="#000000" fontSize="12"
              x={cx - 15} y={cy + 15}>{props.label}
        </text>
      </>
  )
}

function App() {
  const width = 56; // ft
  const height = 29.4; // ft

  const leftBufferInFeet = 4;


  const yCords = [];
  let y = convertFeetToPixels(height);
  while (y >= 0) {
    yCords.push(y);
    y = y - 30
  }

  const xCords = [];
  let x = 100;
  while (x <= 1790) {
    xCords.push(x);
    x = x + 30
  }

  return (
      <div style={{display: "flex", flexDirection: "column"}}>
        <h1>
          Garden Plan
        </h1>
        <div
            style={{
              width: "100%"
            }}>
          <h2>Plan 1</h2>
          <div style={{
            paddingRight: "5px",
            paddingLeft: "5px"
          }}>
            <svg
                viewBox={`0 0 ${convertFeetToPixels(width + leftBufferInFeet)} ${convertFeetToPixels(height + 4)}`}
                xmlns="http://www.w3.org/2000/svg">
              <rect x="0" y="0" width={convertFeetToPixels(width + leftBufferInFeet)}
                    height={convertFeetToPixels(height + 2.5)}
                    fill={"#c0c0c0"}/>
              <text fill="#000000" fontSize="12"
                    x="3" y="500">driveway
              </text>


              <rect x={100} width={convertFeetToPixels(width + 3.4) - 100}
                    height={convertFeetToPixels(height)}
                    fill={"#5a4a36"}/>

              <rect x={900} width={convertFeetToPixels(width + 3.4) - 100}
                    height={convertFeetToPixels(height)}
                    fill={"green"}/>

              <ellipse cx="1200" cy="600" fill={"green"} name={"grass"} rx="470" ry="600"/>

              <rect x={200} y={792} width={convertFeetToPixels(width)}
                    height={convertFeetToPixels(3)}
                    fill={"#5a4a36"}
                    name={"mulch"}
              />

              <rect x={650} y={650} width={convertFeetToPixels(7)}
                    height={convertFeetToPixels(5)}
                    fill={"#5a4a36"}
                    name={"mulch"}
              />
              <ellipse cx="1121" cy="640" fill={"green"} name={"grass"} rx="390" ry="150"/>

              <rect x="100" y={220} width={convertFeetToPixels(14.3)}
                    height={convertFeetToPixels(4)} fill={"#c0c0c0"}/>
              <text fill="#000000" fontSize="12"
                    x="340" y="310">sidewalk
              </text>
              <rect x="409" y={0} width={convertFeetToPixels(4)}
                    height={convertFeetToPixels(height)} fill={"#c0c0c0"}/>
              <rect x="0" y={882} width={convertFeetToPixels(width + leftBufferInFeet)}
                    height={convertFeetToPixels(4)} fill={"#c0c0c0"}/>
              <text fill={"#000000"} fontSize="12"
                    x="340" y="930">sidewalk
              </text>


              <g fill={"#453232"}>
                <Circle cx={130} cy={590 + 267} d={convertFeetToPixels(1.25)} label={"rock"}/>
                <Circle cx={380} cy={580 + 267} d={convertFeetToPixels(1.25)} label={"rock"}/>
              </g>

              <g fill={"#5f744b"}>
                {/*https://shop.bathgardencenter.com/item/055210081028/Pine-Slowmound-Mugo-Pinus-mugo-Slowmound-2-gallon?cid=25*/}
                {/*https://www.waterwiseplants.org/find-a-plant/mops-dwarf-mugo-pine/#header*/}
                <Circle cx={600} cy={770} d={convertFeetToPixels(3)} label={"Mugo Pine"}/>
              </g>
              <g fill={"#bda7ee"}>
                {/* 10" tall */}
                {/*https://www.highcountrygardens.com/product/perennial-plants/nepeta-little-trudy-catmint*/}
                <Circle cx={150} cy={95 + 267} d={convertFeetToPixels(1.33)} label={"Catmint"}/>
                <Circle cx={190} cy={95 + 267} d={convertFeetToPixels(1.33)} label={"Catmint"}/>
                <Circle cx={230} cy={95 + 267} d={convertFeetToPixels(1.33)} label={"Catmint"}/>
                <Circle cx={270} cy={95 + 267} d={convertFeetToPixels(1.33)} label={"Catmint"}/>
                <Circle cx={310} cy={95 + 267} d={convertFeetToPixels(1.33)} label={"Catmint"}/>
                <Circle cx={150} cy={595 + 267} d={convertFeetToPixels(1.33)} label={"Catmint"}/>
                <Circle cx={190} cy={595 + 267} d={convertFeetToPixels(1.33)} label={"Catmint"}/>
                <Circle cx={230} cy={595 + 267} d={convertFeetToPixels(1.33)} label={"Catmint"}/>
                <Circle cx={270} cy={595 + 267} d={convertFeetToPixels(1.33)} label={"Catmint"}/>
                <Circle cx={310} cy={595 + 267} d={convertFeetToPixels(1.33)} label={"Catmint"}/>
              </g>

              <g fill={"#fde933"}>
                {/* 18" tall*/}
                {/*https://www.highcountrygardens.com/product/perennial-plants/achillea-moonshine*/}
                {/*<Circle cx={175} cy={310 + 267} d={convertFeetToPixels(2)} label={"Yarrow"}/>*/}
                {/*<Circle cx={175} cy={350 + 267} d={convertFeetToPixels(2)} label={"Yarrow"}/>*/}
                {/*<Circle cx={130} cy={340 + 267} d={convertFeetToPixels(2)} label={"Yarrow"}/>*/}
                <Circle cx={380} cy={210 + 267} d={convertFeetToPixels(2)} label={"Yarrow"}/>
                <Circle cx={340} cy={220 + 267} d={convertFeetToPixels(2)} label={"Yarrow"}/>
                <Circle cx={380} cy={260 + 267} d={convertFeetToPixels(2)} label={"Yarrow"}/>
                <Circle cx={380} cy={415 + 267} d={convertFeetToPixels(2)} label={"Yarrow"}/>
                <Circle cx={340} cy={435 + 267} d={convertFeetToPixels(2)} label={"Yarrow"}/>
                <Circle cx={380} cy={470 + 267} d={convertFeetToPixels(2)} label={"Yarrow"}/>
              </g>

              {/*<g fill={"#6a454a"}>*/}
              {/*  /!* 30" tall *!/*/}
              {/*  /!*https://www.waterwiseplants.org/find-a-plant/crimson-pygmy-barberry/#header*!/*/}
              {/*  <Circle cx={150} cy={140 + 267} d={convertFeetToPixels(2)}*/}
              {/*          label={"bush"}/>*/}
              {/*</g>*/}


              {/*<g fill={"#b7cebf"}>*/}
              {/*  /!* 30" tall *!/*/}
              {/*  /!*https://www.highcountrygardens.com/product/perennial-plants/artemisia-powis-castle*!/*/}
              {/*  <Circle cx={145} cy={165 + 267} d={convertFeetToPixels(3)}*/}
              {/*          label={"powis Castle artemisia"}/>*/}
              {/*</g>*/}


              <g fill={"#aeb429"}>
              {/*  /!*https://www.highcountrygardens.com/product/perennial-plants/solidago-sphacelata-golden-fleece*!/*/}
              {/*  <Circle cx={190} cy={520 + 267} d={convertFeetToPixels(2)} label={"Goldenrod"}/>*/}
                <Circle cx={130} cy={490 + 267} d={convertFeetToPixels(2)} label={"Goldenrod"}/>
                <Circle cx={180} cy={490 + 267} d={convertFeetToPixels(2)} label={"Goldenrod"}/>
                <Circle cx={130} cy={540 + 267} d={convertFeetToPixels(2)} label={"Goldenrod"}/>
                <Circle cx={130} cy={150 + 267} d={convertFeetToPixels(2)} label={"Goldenrod"}/>
                <Circle cx={130} cy={190 + 267} d={convertFeetToPixels(2)} label={"Goldenrod"}/>
                <Circle cx={180} cy={190 + 267} d={convertFeetToPixels(2)} label={"Goldenrod"}/>
              </g>

              <g fill={"#ffffff"}>
                <Circle cx={590} cy={310 + 267} d={convertFeetToPixels(1.25)} label={"Pow Wow"}/>
              </g>
              <g fill={"#ff7157"}>
                {/*https://www.highcountrygardens.com/product/perennial-plants/penstemon-eatonii-richfield*/}
                <Circle cx={620} cy={180 + 267} d={convertFeetToPixels(1.25)} label={"Penstemon"}/>
              </g>

              <g fill={"#b2305b"}>
                {/*https://www.highcountrygardens.com/product/perennial-plants/centranthus-ruber-coccineus*/}
                <Circle cx={280} cy={300 + 267} d={convertFeetToPixels(2.5)} label={"Valerian"}/>
                <Circle cx={280} cy={400 + 267} d={convertFeetToPixels(2.5)} label={"Valerian"}/>
              </g>

              <g fill={"#fffb00"}>
                <Circle cx={700} cy={190 + 267} d={convertFeetToPixels(2)} label={"BES"}/>
                <Circle cx={680} cy={280 + 267} d={convertFeetToPixels(2)} label={"BES"}/>
                <Circle cx={670} cy={360 + 267} d={convertFeetToPixels(2)} label={"BES"}/>
                <Circle cx={695} cy={440 + 267} d={convertFeetToPixels(2)} label={"BES"}/>
                <Circle cx={760} cy={500 + 267} d={convertFeetToPixels(2)} label={"BES"}/>
              </g>


              <g fill={"#aea3d5"}>
                {/* 48" tall */}
                {/*https://www.highcountrygardens.com/product/perennial-plants/perovskia-atriplicifolia-blue-spires*/}
                <Circle cx={260} cy={215 + 267} d={convertFeetToPixels(4)} label={"russian sage"}/>
                <Circle cx={210} cy={350 + 267} d={convertFeetToPixels(4)} label={"russian sage"}/>
                <Circle cx={260} cy={480 + 267} d={convertFeetToPixels(4)} label={"russian sage"}/>
                <Circle cx={620} cy={105 + 267} d={convertFeetToPixels(4)} label={"russian sage"}/>
              </g>

              <g fill={"#ffffff"}>
                <Circle cx={700} cy={285 + 267} d={10} label={""}/>
              </g>

              <g fill={"#bea4e2"}>
                {/*https://www.highcountrygardens.com/product/perennial-plants/echinops-banaticus-blue-glow*/}
                <Circle cx={290} cy={350 + 267} d={convertFeetToPixels(1.5)} label={"echinops"}/>
                {/*<Circle cx={200} cy={430 + 267} d={convertFeetToPixels(1.5)} label={"echinops"}/>*/}
                {/*<Circle cx={200} cy={270 + 267} d={convertFeetToPixels(1.5)} label={"echinops"}/>*/}
              </g>

              <g fill={"#de5abf"}>
                {/*https://www.highcountrygardens.com/product/perennial-plants/agastache-cana-rosita*/}
                <Circle cx={560} cy={550 + 267} d={convertFeetToPixels(1.5)} label={"Rosita Agastache"}/>
              </g>

              <g fill={"#8e3eff"}>
                {/* 18" tall */}
                {/*https://www.highcountrygardens.com/product/perennial-plants/lavandula-angustifolia-vera*/}
                <Circle cx={130} cy={235 + 267} d={convertFeetToPixels(2)} label={"lavender"}/>
                <Circle cx={130} cy={285 + 267} d={convertFeetToPixels(2)} label={"lavender"}/>
                <Circle cx={130} cy={335 + 267} d={convertFeetToPixels(2)} label={"lavender"}/>
                <Circle cx={130} cy={385 + 267} d={convertFeetToPixels(2)} label={"lavender"}/>
                <Circle cx={130} cy={435 + 267} d={convertFeetToPixels(2)} label={"lavender"}/>
              </g>

              <g fill={"#ffffff"}>
                {/* 18" tall */}
                {/* https://www.highcountrygardens.com/product/perennial-plants/melampodium-leucanthum */}
                {/*<Circle cx={125} cy={485 + 267} d={convertFeetToPixels(1.5)} label={"Blackfoot Daisy (Melampodium)"}/>*/}
                {/*<Circle cx={125} cy={385 + 267} d={convertFeetToPixels(1.5)} label={"Blackfoot Daisy (Melampodium)"}/>*/}
              </g>
              <g fill={"#d9bec9"}>
                {/* 24" tall */}
                {/*https://www.highcountrygardens.com/product/perennial-plants/aster-oblongifolius-raydons-favorite*/}
                <Circle cx={335} cy={130 + 267} d={convertFeetToPixels(2)} label={"Asters"}/>
                <Circle cx={335} cy={180 + 267} d={convertFeetToPixels(2)} label={"Asters"}/>
                <Circle cx={380} cy={160 + 267} d={convertFeetToPixels(2)} label={"Asters"}/>
                <Circle cx={380} cy={310 + 267} d={convertFeetToPixels(2)} label={"Asters"}/>
                <Circle cx={335} cy={340 + 267} d={convertFeetToPixels(2)} label={"Asters"}/>
                <Circle cx={380} cy={360 + 267} d={convertFeetToPixels(2)} label={"Asters"}/>
                <Circle cx={380} cy={520 + 267} d={convertFeetToPixels(2)} label={"Asters"}/>
                <Circle cx={330} cy={495 + 267} d={convertFeetToPixels(2)} label={"Asters"}/>
                <Circle cx={335} cy={550 + 267} d={convertFeetToPixels(2)} label={"Asters"}/>
              </g>
              <g fill={"#e8dbaa"}>
                {/*https://www.provenwinners.com/plants/nassella-formerly-stipa/mexican-feather-grass-nassella-formerly-stipa-tenuissima*/}
                <Circle cx={330} cy={280 + 267} d={convertFeetToPixels(2)}
                        label={"Mexican Feather Grass"}/>
                <Circle cx={330} cy={390 + 267} d={convertFeetToPixels(2)}
                        label={"Mexican Feather Grass"}/>
                <Circle cx={190} cy={140 + 267} d={convertFeetToPixels(2)}
                        label={"Mexican Feather Grass"}/>
                <Circle cx={240} cy={140 + 267} d={convertFeetToPixels(2)}
                        label={"Mexican Feather Grass"}/>
                <Circle cx={290} cy={140 + 267} d={convertFeetToPixels(2)}
                        label={"Mexican Feather Grass"}/>
                <Circle cx={190} cy={550 + 267} d={convertFeetToPixels(2)}
                        label={"Mexican Feather Grass"}/>
                <Circle cx={240} cy={550 + 267} d={convertFeetToPixels(2)}
                        label={"Mexican Feather Grass"}/>
                <Circle cx={290} cy={550 + 267} d={convertFeetToPixels(2)}
                        label={"Mexican Feather Grass"}/>
                <Circle cx={190} cy={430 + 267} d={convertFeetToPixels(2)}
                        label={"Mexican Feather Grass"}/>
                <Circle cx={190} cy={270 + 267} d={convertFeetToPixels(2)}
                        label={"Mexican Feather Grass"}/>
              </g>


              <g fill={"#429795"}>
                {/*https://shop.bathgardencenter.com/item/055209090017/Blue-Spruce-Dwarf-Globe-Picea-pungens-Glauca-Globosa-1-gallon?cid=25*/}
                <Circle cx={760} cy={150} d={convertFeetToPixels(6)}
                        label={"dwarf globe blue spruce"}/>
              </g>

              {/* vert rule*/}
              <line x1="80" y1="0" x2="80" y2="881" stroke="black" strokeWidth="1"/>
              <g stroke="black" strokeWidth="1">
                {
                  yCords.map((yCords, index) => (
                      <React.Fragment key={index}>
                        <line x1="75" y1={yCords}
                              x2={index % 2 === 0 && showLongRulers ? 1789 : 95}
                              y2={yCords}/>
                        <line x1="1770" y1={yCords}
                              x2={1789}
                              y2={yCords}/>
                      </React.Fragment>
                  ))
                }
              </g>
              <g fontSize="10">
                {
                  yCords.map((y, index) =>
                      <text key={index} x="61" y={y + 2}>{index}'</text>
                  )
                }
              </g>
              {/*  hor rule */}
              <g stroke="black" strokeWidth="1">
                {xCords.map((x, index) => (
                    <React.Fragment key={index}>
                      <line x1={x} y1="0" x2={x}
                            y2={index % 2 === 0 && showLongRulers ? 870 : 15}
                      />
                      <line x1={x} y1="890" x2={x} y2={870}/>
                    </React.Fragment>
                ))}
              </g>
              <g fontSize="10">
                {
                  xCords.map((x, index) =>
                      <text key={index} x={x - 2} y={"910"}>{index}'</text>
                  )
                }
              </g>
            </svg>
          </div>
        </div>
        <Legend/>
      </div>
  )
}

export default App
