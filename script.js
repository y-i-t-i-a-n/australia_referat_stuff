const map = L.map('map', {
    zoomControl:false,
	minZoom: 5,
	useCache: true,
	crossOrigin: true,
	attributionControl: false,
    maxBoundsViscosity: 1.0,
    worldCopyJump: true
}).setView([-26.4391, 133.2813], 5)
/*const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
const tileURL = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
const tiles = L.tileLayer(tileURL, { attribution })
tiles.addTo(map)*/
L.tileLayer('https://tile.jawg.io/4e159650-d2ec-4395-bf40-db058de12603/{z}/{x}/{y}{r}.png?access-token={accessToken}&lang=en', {
    accessToken: 'xRaQuIu0JAWHEpAFuQ5xHxvgOuogAz21wX5aSGjS77e4tujtufZElluXPL50cpRQ',
    attribution: "<a href=\"https://www.jawg.io/\" target=\"_blank\">&copy; Jawg</a> - <a href=\"https://www.openstreetmap.org/\" target=\"_blank\">&copy; OpenStreetMap</a>&nbsp;contributors"
}).addTo(map)
let att = []
att[0] = new L.Marker([-33.8569317, 151.2152413])
att[0].bindPopup("<b>Sydney Opera House</b><br><button class='info-btn' onclick='sydneyOperaHouse()'><i class='fa fa-plus'></i> INFO</button>")
att[1] = new L.Marker([-19.0270448, 150.6729208])
att[1].bindPopup("<b>Great Barrier Reef</b><br><button class='info-btn' onclick='greatBarrierReef()'><i class='fa fa-plus'></i> INFO</button>")
att[2] = new L.Marker([-25.3467040, 131.0345159])
att[2].bindPopup("<b>Uluru (Ayers Rock)</b><br><button class='info-btn' onclick='uluru()'><i class='fa fa-plus'></i> INFO</button>")
att[3] = new L.Marker([-33.8524381, 151.210620])
att[3].bindPopup("<b>Sydney Harbor Bridge</b><br><button class='info-btn' onclick='sydneyHarborBridge()'><i class='fa fa-plus'></i> INFO</button>")
att[4] = new L.Marker([-33.616147, 150.453835])
att[4].bindPopup("<b>Blue Mountains N.P.</b><br><button class='info-btn' onclick='blueMountains()'><i class='fa fa-plus'></i> INFO</button>")
att[5] = new L.Marker([-33.890922, 151.277225])
att[5].bindPopup("<b>Bondi Beach</b><br><button class='info-btn' onclick='bondiBeach()'><i class='fa fa-plus'></i> INFO</button>")
att[6] = new L.Marker([-32.000905, 115.518759])
att[6].bindPopup("<b>Rottnest Island</b><br><button class='info-btn' onclick='rottnestIsland()'><i class='fa fa-plus'></i> INFO</button>")
att[7] = new L.Marker([-38.688279, 143.381617])
att[7].bindPopup("<b>Great Ocean Road</b><br><button class='info-btn' onclick='greatOceanRoad()'><i class='fa fa-plus'></i> INFO</button>")
att[8] = new L.Marker([-35.826021, 137.213552])
att[8].bindPopup("<b>Kangaroo Island</b><br><button class='info-btn' onclick='kangarooIsland()'><i class='fa fa-plus'></i> INFO</button>")
att[9] = new L.Marker([-17.963660, 122.228577])
att[9].bindPopup("<b>Broome & Kimberley Region</b><br><button class='info-btn' onclick='broome()'><i class='fa fa-plus'></i> INFO</button>")
let i = 0
while(i < att.length) {
	map.addLayer(att[i])
	i++
}
$(".closebtn").click(() => $(".whole-scr-modal").hide())
function focusOne() {
	$("#btn-pt1").addClass("men-sel")
	$("#btn-pt2").removeClass("men-sel")
	$("#page-1").show()
	$("#page-2").hide()
}
function focusTwo() {
	$("#btn-pt1").removeClass("men-sel")
	$("#btn-pt2").addClass("men-sel")
	$("#page-1").hide()
	$("#page-2").show()
}
function sydneyOperaHouse() {
	$("#popup-header").text("Sydney Opera House")
	$("#page-1").empty().append(`
	<h4>Facts</h4>
	<ul>
		<li>It's one of the UNESCO Heritage Sites</li>
		<li>it's one of the world's greatest architectural icons</li>
	</ul>
	<h4>History</h4>
	<ul>
		<li>Danish architect Jørn Utzon won an international competition with the design</li>
		<li>Construction was completed in 1973</li>
		<li>It cost 10 times more than originally intended</li>
	</ul>
	<h4>Activities</h4>
	<ul>
		<li>Watching a play</li>
		<li>Dining at one of the restaurants</li>
		<li>Taking a tour of the building</li>
	</ul>`)
	$("#gallery-img-box").empty().append(`
	<div class='gallery-img-formatter'>
		<img class='gallery-img' src='images/1-1.jpg'>
	</div>
	<div class='gallery-img-formatter'>
		<img class='gallery-img' src='images/1-2.jpg'>
	</div>
	<div class='gallery-img-formatter'>
		<img class='gallery-img' src='images/1-3.jpg'>
	</div>
	<div class='gallery-img-formatter'>
		<img class='gallery-img' src='images/4-1.jpg'>
	</div>
	<div class='gallery-img-formatter'>
		<img class='gallery-img' src='images/4-3.jpg'>
	</div>`)
	$("#btn-pt1").click()
	$(".whole-scr-modal").show()
}
function greatBarrierReef() {
	$("#popup-header").text("Great Barrier Reef")
	$("#page-1").empty().append(`
	<h4>Facts</h4>
	<ul>
		<li>It's visible from outer space</li>
		<li>It's one of the largest living structures on the planet</li>
		<li>It includes over 3000 coral reefs, 600 continental islands, 300 coral cays and inshore mangrove islands</li>	
		<li>one of the seven wonders of the natural world</li>
		<li>There is more than 1,600 species of tropical fish, sharks, dugongs, dolphins, turtles, rays, and giant clams</li>
	</ul>
	<h4>Activities</h4>
	<ul>
		<li>Diving</li>
		<li>Seeing the reef from underwater viewing stations and glass bottom boats</li>
	</ul>`)
	$("#gallery-img-box").empty().append(`
	<div class='gallery-img-formatter'>
		<img class='gallery-img' src='images/2-1.jpg'>
	</div>
	<div class='gallery-img-formatter'>
		<img class='gallery-img' src='images/2-2.jpg'>
	</div>
	<div class='gallery-img-formatter'>
		<img class='gallery-img' src='images/2-3.jpg'>
	</div>
	<div class='gallery-img-formatter'>
		<img class='gallery-img' src='images/2-4.jpg'>
	</div>
	<div class='gallery-img-formatter'>
		<img class='gallery-img' src='images/2-5.jpg'>
	</div>
	<div class='gallery-img-formatter'>
		<img class='gallery-img' src='images/2-6.jpg'>
	</div>`)
	$("#btn-pt1").click()
	$(".whole-scr-modal").show()
}
function uluru() {
	$("#popup-header").text("Uluru")
	$("#page-1").empty().append(`
	<h4>Facts</h4>
	<ul>
		<li>It's one of the most photographed natural wonders in the country</li>
		<li>It's a sacred site for the Aborigines</li>
		<li>It rises to a height of 348 meters from the surrounding plain</li>
	</ul>
	<h4>Activities</h4>
	<ul>
		<li>Watching the sunset</li>
	</ul>`)
	$("#gallery-img-box").empty().append(`
	<div class='gallery-img-formatter'>
		<img class='gallery-img' src='images/3-1.jpg'>
	</div>
	<div class='gallery-img-formatter'>
		<img class='gallery-img' src='images/3-2.jpg'>
	</div>
	<div class='gallery-img-formatter'>
		<img class='gallery-img' src='images/3-3.jpg'>
	</div>`)
	$("#btn-pt1").click()
	$(".whole-scr-modal").show()
}
function sydneyHarborBridge() {
	$("#popup-header").text("Sydney Harbor Bridge")
	$("#page-1").empty().append(`
	<h4>Facts</h4>
	<ul>
		<li>It's the largest steel arch bridge in the world</li>
		<li>It rises 134 meters above the harbor and spans 500 meters</li>
		<li>It connects Sydney's North Shore to the central business district</li>
		<li>Two railway lines and eight lanes for road traffic extend over the bridge</li>
	</ul>
	<h4>History</h4>
	<ul>
		<li>It was completed in 1932</li>
	</ul>
	<h4>Activities</h4>
	<ul>
		<li>ascending to the top of the bridge</li>
	</ul>`)
	$("#gallery-img-box").empty().append(`
	<div class='gallery-img-formatter'>
		<img class='gallery-img' src='images/4-1.jpg'>
	</div>
	<div class='gallery-img-formatter'>
		<img class='gallery-img' src='images/4-2.jpg'>
	</div>
	<div class='gallery-img-formatter'>
		<img class='gallery-img' src='images/4-3.jpg'>
	</div>
	<div class='gallery-img-formatter'>
		<img class='gallery-img' src='images/4-4.jpg'>
	</div>`)
	$("#btn-pt1").click()
	$(".whole-scr-modal").show()
}
function blueMountains() {
	$("#popup-header").text("Blue Mountains National Park")
	$("#page-1").empty().append(`
	<h4>Facts</h4>
	<ul>
		<li>It's a UNESCO World Heritage Site</li>
		<li>It has 140 kilometers of hiking trails trailsprotects more than 664,000 acres of wilderness</li>
	</ul>
	<h4>Activities</h4>
	<ul>
		<li>Hiking</li>
		<li>Abseiling</li>
		<li>Rock Climbing</li>
		<li>Mountain Biking</li>
		<li>Horseback Riding</li>
	</ul>`)
	$("#gallery-img-box").empty().append(`
	<div class='gallery-img-formatter'>
		<img class='gallery-img' src='images/5-1.jpg'>
	</div>
	<div class='gallery-img-formatter'>
		<img class='gallery-img' src='images/5-2.jpg'>
	</div>
	<div class='gallery-img-formatter'>
		<img class='gallery-img' src='images/5-3.jpg'>
	</div>
	<div class='gallery-img-formatter'>
		<img class='gallery-img' src='images/5-4.jpg'>
	</div>`)
	$("#btn-pt1").click()
	$(".whole-scr-modal").show()
}
function bondiBeach() {
	$("#popup-header").text("Bondi Beach")
	$("#page-1").empty().append(`
	<h4>Facts</h4>
	<ul>
		<li>It's the home to one of the oldest surf life saving clubs in the world</li>
	</ul>
	<h4>Activities</h4>
	<ul>
		<li>Seaside Strolling</li>
		<li>Picnicing</li>
		<li>Celebebrating Christmas or New Years eve</li>
	</ul>`)
	$("#gallery-img-box").empty().append(`
	<div class='gallery-img-formatter'>
		<img class='gallery-img' src='images/6-1.jpg'>
	</div>
	<div class='gallery-img-formatter'>
		<img class='gallery-img' src='images/6-2.jpg'>
	</div>
	<div class='gallery-img-formatter'>
		<img class='gallery-img' src='images/6-3.jpg'>
	</div>`)
	$("#btn-pt1").click()
	$(".whole-scr-modal").show()
}
function rottnestIsland() {
	$("#popup-header").text("Rottnest Island")
	$("#page-1").empty().append(`
	<h4>Facts</h4>
	<ul>
		<li>It's the only place where you cand find Quokkas</li>
	</ul>
	<h4>Activities</h4>
	<ul>
		<li>Taking selfies with Quokkas</li>
		<li>Skydiving</li>
		<li>Biking</li>
	</ul>`)
	$("#gallery-img-box").empty().append(`
	<div class='gallery-img-formatter'>
		<img class='gallery-img' src='images/7-1.jpg'>
	</div>
	<div class='gallery-img-formatter'>
		<img class='gallery-img' src='images/7-2.jpg'>
	</div>
	<div class='gallery-img-formatter'>
		<img class='gallery-img' src='images/7-3.jpg'>
	</div>`)
	$("#btn-pt1").click()
	$(".whole-scr-modal").show()
}
function greatOceanRoad() {
	$("#popup-header").text("Great Ocean Road")
	$("#page-1").empty().append(`
	<h4>Facts</h4>
	<ul>
		<li>It stretches for 300 kilometers along Australia's southeast coast</li>
	</ul>
	<h4>Sights</h4>
	<ul>
		<li>Port Campbell National Park: Wind and wave-sculptured rock formations (Twelve Apostles, London Bridge, the Arch, Loch Ard Gorge)</li>
	</ul>
	<h4>Activities</h4>
	<ul>
		<li>Diving</li>
		<li>Helicopter Tour</li>
		<li>Hiking</li>
	</ul>`)
	$("#gallery-img-box").empty().append(`
	<div class='gallery-img-formatter'>
		<img class='gallery-img' src='images/8-1.jpg'>
	</div>
	<div class='gallery-img-formatter'>
		<img class='gallery-img' src='images/8-2.jpg'>
	</div>
	<div class='gallery-img-formatter'>
		<img class='gallery-img' src='images/8-3.jpg'>
	</div>
	<div class='gallery-img-formatter'>
		<img class='gallery-img' src='images/8-4.jpg'>
	</div>
	<div class='gallery-img-formatter'>
		<img class='gallery-img' src='images/8-5.jpg'>
	</div>`)
	$("#btn-pt1").click()
	$(".whole-scr-modal").show()
}
function kangarooIsland() {
	$("#popup-header").text("Kangaroo Island")
	$("#page-1").empty().append(`
	<h4>Facts</h4>
	<ul>
		<li>Kangaroos, sea lions, penguins and koalas live here</li>
	</ul>
	<h4>Sights</h4>
	<ul>
		<li>Wind-sculpted rock formations (Remarkable Rocks and Admirals Arch)</li>
	</ul>
	<h4>Activities</h4>
	<ul>
		<li>Hiking</li>
	</ul>`)
	$("#gallery-img-box").empty().append(`
	<div class='gallery-img-formatter'>
		<img class='gallery-img' src='images/9-1.jpg'>
	</div>
	<div class='gallery-img-formatter'>
		<img class='gallery-img' src='images/9-2.jpg'>
	</div>
	<div class='gallery-img-formatter'>
		<img class='gallery-img' src='images/9-3.jpg'>
	</div>
	<div class='gallery-img-formatter'>
		<img class='gallery-img' src='images/9-4.jpg'>
	</div>`)
	$("#btn-pt1").click()
	$(".whole-scr-modal").show()
}
function broome() {
	$("#popup-header").text("Broome & Kimberley")
	$("#page-1").empty().append(`
	<h4>Sights</h4>
	<ul>
		<li>Broome Historical Museum</li>
		<li>Broome Crocodile Park</li>
		<li>The Staircase to the Moon</li>
		<li>Horizontal Waterfall</li>
		<li>Cape Leveque</li>
		<li>The Gibb River Road</li>
		<li>Purnululu National Park</li>
		<li>The cascades of Mitchell Falls</li>
	</ul>
	<h4>Activities</h4>
	<ul>
		<li>riding camels</li>
	</ul>`)
	$("#gallery-img-box").empty().append(`
	<div class='gallery-img-formatter'>
		<img class='gallery-img' src='images/10-1.jpg'>
	</div>
	<div class='gallery-img-formatter'>
		<img class='gallery-img' src='images/10-2.jpg'>
	</div>
	<div class='gallery-img-formatter'>
		<img class='gallery-img' src='images/10-3.jpg'>
	</div>
	<div class='gallery-img-formatter'>
		<img class='gallery-img' src='images/10-4.jpg'>
	</div>
	<div class='gallery-img-formatter'>
		<img class='gallery-img' src='images/10-5.jpg'>
	</div>
	<div class='gallery-img-formatter'>
		<img class='gallery-img' src='images/10-6.jpg'>
	</div>
	<div class='gallery-img-formatter'>
		<img class='gallery-img' src='images/10-7.jpg'>
	</div>
	<div class='gallery-img-formatter'>
		<img class='gallery-img' src='images/10-8.jpg'>
	</div>`)
	$("#btn-pt1").click()
	$(".whole-scr-modal").show()
}
