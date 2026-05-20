import { Article, MatchScore, CricketSite } from '../types';

export const CRICKET_SITES: CricketSite[] = [
  {
    name: "ESPNcricinfo",
    url: "https://www.espncricinfo.com",
    description: "The absolute standard-bearer in cricket journalism. Provides ball-by-ball commentary, comprehensive player statistics (via their StatsGuru engine), detailed match analysis, historical records, and expert columns from legendary former captains.",
    features: ["StatsGuru database profiling every player in cricket history", "In-depth live text commentaries with custom wagon wheels", "Comprehensive coverage of both major and minor domestic leagues globally"],
    recommendedFor: "Pro statistics, historical match research, and elite editorial journalism.",
    badge: "Industry Standard"
  },
  {
    name: "Cricbuzz",
    url: "https://www.cricbuzz.com",
    description: "Renowned for its blazing-fast live score updates and mobile-centric news. It delivers outstanding pre-match video capsules, engaging post-session analysis by seasoned pundits, and extensive textual summaries of ongoing domestic and international games.",
    features: ["Rapid, real-time audio and text scorecasts", "Intuitive user interface ideal for quick checks on the move", "Extensive video archives featuring pre-match previews and talk shows"],
    recommendedFor: "Instant live scores, current point tables, and easy mobile reading.",
    badge: "Real-time Expert"
  },
  {
    name: "ICC Cricket",
    url: "https://www.icc-cricket.com",
    description: "The official home of the International Cricket Council. Essential for official team rankings, tournament calendars, tournament ticketing, qualification guidelines, rule books, and highlights of major global events like the ODI and T20 World Cups.",
    features: ["Official ICC Player Rankings (Test, ODI, T20I)", "Match highlights of World Cups and Championship trophies", "Official code of conduct, playing conditions, and regulatory rule books"],
    recommendedFor: "Official world rankings, tournament brackets, and regulatory compliance.",
    badge: "Official Governing Body"
  },
  {
    name: "Wisden",
    url: "https://www.wisden.com",
    description: "Founded on the rich heritage of the 'Bible of Cricket' yearbook. Wisden delivers unparalleled long-form essays, highly intellectual critique, historical retrospectives, and thought-provoking debates about the state and spirit of the gentleman's game.",
    features: ["Wisden Cricketers of the Year archives dating back over a century", "Poignant social-sports commentary and philosophical cricket pieces", "Tactical deep dives on cricket equipment, pitches, and coaching methodologies"],
    recommendedFor: "Long-form reading, historical critique, and literary sports prose.",
    badge: "Heritage & Literature"
  },
  {
    name: "Sky Sports Cricket",
    url: "https://www.skysports.com/cricket",
    description: "Premier broadcasting website offering elite video packages, high-tech breakdown analyses (such as Hawk-Eye and UltraEdge telemetry reviews), masterclasses with professional legends, and leading European and English county action coverage.",
    features: ["Exceptional broad-range video clips and coaching masterclasses", "Frequent insight pieces by premium UK cricket commentators", "Comprehensive domestic coverage across the Vitality Blast, County Championship, and The Hundred"],
    recommendedFor: "High-definition video summaries, pitch reports, and pundit roundtables.",
    badge: "Elite Video Coverage"
  }
];

export const SPORTS_ARTICLES: Article[] = [
  {
    id: "bazball-revolution",
    title: "The Tactical Revolution in Modern Test Cricket: Data-Driven Matchups and the Era of High-Octane Aggression",
    brief: "An extensive tactical analysis exploring how ultra-aggressive batting strategies and digital statistical modeling are reshaping the oldest, most traditional format of the gentleman's game.",
    author: "Jonathan Mercer",
    date: "May 18, 2026",
    category: "Cricket",
    image: "https://images.unsplash.com/photo-1540747737956-37872176dc01?auto=format&fit=crop&q=80&w=800",
    readTime: "8 min read",
    tags: ["Test Cricket", "Bazball", "Matchup Analytics", "Red-ball Strategy"],
    links: [
      { text: "Track current Test stats on ESPNcricinfo", url: "https://www.espncricinfo.com" },
      { text: "Check match analysis on Wisden", url: "https://www.wisden.com" }
    ],
    featured: true,
    content: `
      <h2>The Paradigm Shift in Five-Day Cricket</h2>
      <p>For over a century, Test cricket was governed by an unwritten manual stating that patience, defensive solidity, and standard risk-mitigation were the absolute cornerstones of survival. Batsmen left the ball on length, bowlers prioritized consistent lines on the fourth stump, and captains set traditional, defensive fields to slowly strangle the batting side of runs. However, the last four years have witnessed an aggressive, head-spinning transformation in red-ball strategy. Under the coaching umbrella of Brendan McCullum and the captaincy of Ben Stokes—colloquially termed 'Bazball'—England, and subsequently several other test-playing nations, dismantled centuries of conventional wisdom.</p>
      
      <p>This tactical revolution isn't merely characterized by swinging wildly at the red leather ball. Rather, it represents an intentional psychological campaign combined with highly sophisticated matchup analytics. Teams are now employing rapid, high-risk, high-reward scoring tempos that intentionally place the fielding captain under continuous, exhausting stress. By scoring at 4.5 to 5.5 runs per over, a team can squeeze a five-day match's run-scoring agenda into just three days, leaving massive amounts of time to force result-oriented scenarios. Learn more details on <a href="https://www.espncricinfo.com" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline font-medium">ESPNcricinfo</a>.</p>

      <h2>The Mechanics of Risk-Optimized Batting</h2>
      <p>Traditionalists originally labeled this new approach as reckless or 'unsustainable'. However, modern analytics models reveal a sound mathematical justification behind the aggression. In Test cricket, a batting ball receives the best conditions before the pitch deteriorates and the ball loses its hardness. By attacking aggressively early on, players capitalize on the hard ball and friendly batting parameters. Instead of allowing a master spinner or swing specialist to settle into a rhythm, batsmen disrupt their lengths with reverse sweeps, advanced-track drives, and intentional aerial lofting. This shifts field requirements, establishing vast gaps in the outfield that allow for effortless strike rotation.</p>

      <p>Modern analytical databases, such as those cataloged extensively on <a href="https://www.cricbuzz.com" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline font-medium">Cricbuzz</a>, demonstrate that putting bowler specialists on the defensive immediately drops their accuracy. When a bowler's economy rises above four runs per over, their margin of error shrinks drastically. Instead of targeting a consistent length, they begin trying variations (slower balls, wide yorkers) simply to escape damage, which actively plays into the hands of the batting side.</p>

      <h2>Matchups and Data-Driven Selection Profiles</h2>
      <p>Beyond the brute aggression, the role of data analyst has expanded immensely. Selecting a Test playing XI is no longer just about aggregate averages. Teams analyze bowler release angles, batsman reaction times against ball rotations, and pitch soil densities. For example, if a subcontinental venue is known to show early abrasive qualities, captains will load their arsenals with fast bowlers skilled in cross-seam deliveries to accelerate reverse-swing mechanics. To see official player details and global rosters, you can browse the <a href="https://www.icc-cricket.com" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline font-medium">Official ICC Cricket Portal</a>.</p>
      
      <p>Today's modern all-rounder embodies this transition. Player profiles require a secondary skill set that is elite, rather than mediocre. The multi-dimensional athlete allows a captain to play an additional specialist bat or another express bowler, which provides unprecedented tactical versatility across shifting five-day sessions.</p>

      <h2>The Future: Red-Ball Sustainability In the franchise Era</h2>
      <p>The rise of global T20 leagues has placed historical Test series in a precarious spot. To maintain relevance and draw television numbers, Test cricket must offer theater, speed, and continuous narratives. The adoption of high-octane Test play has directly resulted in sold-out stadium crowds and skyrocketing viewership metrics. It is an evolutionary defense mechanism designed to keep the game's ultimate format alive and thriving for generations to come. For elegant retrospectives on historical matches that formed this legacy, consult the pages of <a href="https://www.wisden.com" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline font-medium">Wisden</a>.</p>
    `
  },
  {
    id: "t20-world-expansion",
    title: "Global Mapping: How the ICC T20 World Cup is Redrawing the Boundaries of International Cricket",
    brief: "As the ICC expands its marquee tournaments to include non-traditional cricketing nations, we investigate the developmental pathways, structural changes, and competitive parity taking shape in international sports.",
    author: "Amina Al-Sayed",
    date: "May 15, 2026",
    category: "Cricket",
    image: "https://images.unsplash.com/photo-1531415080290-bc9854593f37?auto=format&fit=crop&q=80&w=800",
    readTime: "6 min read",
    tags: ["ICC", "T20 World Cup", "Global Cricket Expansion", "Associate Nations"],
    links: [
      { text: "Official ICC Tournament Calendars", url: "https://www.icc-cricket.com" },
      { text: "T20 Matches Live Scores at Cricbuzz", url: "https://www.cricbuzz.com" }
    ],
    featured: false,
    content: `
      <h2>A Global Blueprint for the Gentleman's Game</h2>
      <p>For generations, cricket was considered a gated sport, dominated by a small, elite circle of ten to twelve Test-playing nations. While associate members participated, their path to major international tournaments was blocked by severe qualifying tiers and institutional neglect. Today, that old paradigm is being entirely dismantled. Driven by the financial viability, relative simplicity, and breakneck pace of the Twenty20 format, the International Cricket Council (<a href="https://www.icc-cricket.com" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline font-medium">ICC</a>) has embarked on an ambitious expansion program, aiming to build a truly global sport.</p>

      <p>The T20 World Cup tournaments now feature twenty competing teams, accommodating emerging cricketing nations such as the United States, Nepal, Uganda, and Oman. This layout does not just represent token inclusion; it exposes developmental cricket structures to high-intensity competitive tournaments, building invaluable national experience. This strategy has paid immediate dividends, with multiple historic upsets proving that the talent gap between elite nations and hungry associate members is closing faster than anyone anticipated.</p>

      <h2>The Commercial Engine of Associate Integration</h2>
      <p>The engine fueling this expansion is access to commercial media markets. By staging high-profile international matches in cities like New York and Dallas, the cricket ecosystem has tapped into an athletic consumer base with massive growth potential. Staging World Cup games in non-traditional venues drives corporate investment, youth academies, and local infrastructure projects. In turn, municipal governments are allocating public funding to build multi-sport fields, solidifying cricket’s footing in new regions.</p>

      <p>Emerging teams are also benefiting from the availability of experienced training staff. High-performance coaches from powerhouse nations are increasingly leading associate programs, implementing professional fitness, analytics-driven tactical setups, and psychological preparation models. To keep up with these global league standings and international player profiles, sports fans routinely turn to modern database services such as <a href="https://www.cricbuzz.com" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline font-medium">Cricbuzz</a>.</p>

      <h2>Parity and the Demise of the 'Minnow' Moniker</h2>
      <p>In international cricket, teams that were historically labeled 'minnows' have proven they can go toe-to-toe with administrative giants. T20 cricket acts as a massive equalizer. Within a brief, 120-ball-per-side framework, a single special batting innings or a disciplined four-over spell can secure a historic victory. In Test match cricket, the deeper bench strength of wealthier nations usually guarantees a win over multiple days, but T20 cricket is beautifully unpredictable, democratizing sports glory in highly visible, inspiring ways.</p>

      <h2>The Challenges Ahead: Keeping Quality Consistent</h2>
      <p>Despite the immense excitement of global expansion, critics point out several major challenges that the sport must navigate carefully. First, domestic facilities in associate nations need significant, continuous funding to ensure training setups match modern standards. Second, the international playing calendar is already packed, meaning matches must be scheduled efficiently to avoid player burnout. To browse detailed articles regarding international cricketing structures and tournament scheduling, refer to the expert commentaries at <a href="https://www.espncricinfo.com" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline font-medium">ESPNcricinfo</a>.</p>
    `
  },
  {
    id: "science-of-swing",
    title: "Mastering the Art of Swing: A Comprehensive Technical Analysis of Aerodynamics in Cricket Ball Bowling",
    brief: "We dissect the fascinating fluid dynamics, boundary layer physics, and physical mechanics that enable fast bowlers to bend the trajectory of the leather ball through mid-air.",
    author: "Dr. Sandeep Kulkarni (Physics & Sports Analyst)",
    date: "May 10, 2026",
    category: "Cricket",
    image: "https://images.unsplash.com/photo-1587280501635-68a0e82cd5ff?auto=format&fit=crop&q=80&w=800",
    readTime: "7 min read",
    tags: ["Bowling Physics", "Aerodynamics", "Reverse Swing", "Sports Engineering"],
    links: [
      { text: "Find historical swing bowling benchmarks on ESPNcricinfo", url: "https://www.espncricinfo.com" },
      { text: "Watch Sky Sports cricket biomechanics masterclasses", url: "https://www.skysports.com/cricket" }
    ],
    featured: false,
    content: `
      <h2>The Fluid Dynamics of Conventional Swing</h2>
      <p>When an express bowler unleashes a cricket ball at 90mph, they are not just fighting the batsman's reflexes; they are actively manipulating the air currents enveloping the ball. The art of swing bowling is a masterclass in aerodynamic manipulation. A key component of this phenomenon is the raised, hand-stitched seam running around the center of the leather ball. By tilting the seam relative to the direction of flight, the bowler splits the oncoming air currents into asymmetrical streams, producing a pressure differential that pulls the ball sideways through the air.</p>

      <p>In conventional swing bowling, the seam is angled towards the slip cordon (for outswing) or the leg-side (for inswing), and the ball is kept in pristine physical condition on one side. The smooth, polished half of the ball allows air to flow laminarly, maintaining low drag, while the unpolished, rough half creates a turbulent boundary layer of higher drag. This aerodynamic inequality creates a lateral draft, sucking the ball towards the side of high drag. To study legendary swing bowlers who perfected this craft, you can read their biographies and career profiles on <a href="https://www.espncricinfo.com" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline font-medium">ESPNcricinfo</a>.</p>

      <h2>The Mystique of Reverse Swing</h2>
      <p>For decades, conventional swing was the only style understood in international circles. However, in the late 20th century, subcontinental fast bowlers discovered a counter-intuitive phenomenon that occurs as a cricket ball becomes heavily worn and dry. This technique, called 'reverse swing', defies traditional expectation. Rather than swinging towards the rough side of the ball, a ball moving at high speeds (typically above 85mph/137kph) suddenly curves in the opposite direction, swinging towards the heavy, polished, or moist side.</p>

      <p>The science of reverse swing centers on complex boundary layer transitions. At high speeds, the air flowing over the smooth side becomes turbulent before it reaches the back of the ball. The rough side, on the other hand, causes early separation of the boundary layer. This results in the turbulent layer on the smooth side staying attached to the ball longer, pulling its flight trajectory towards the polished side. It is a highly dangerous weapon, particularly when delivered as an in-swinging yorker aimed directly at the batsman’s toes. Masterclasses on reverse-swing body mechanics and bowling release points can be viewed on <a href="https://www.skysports.com/cricket" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline font-medium">Sky Sports Cricket</a>.</p>

      <h2>Environmental Influence: Humidity, Silt, and Wind</h2>
      <p>Every fast bowler knows that atmospheric conditions shape the behavior of the ball. Cloud cover, local humidity levels, and the soil types used to prepare the pitch play massive roles in swing consistency. High relative humidity prevents moisture on the leather from evaporating quickly, helping maintain the weight differential between the halves. Furthermore, abrasive clays and silty soils on the pitch accelerate the wearing process on one side, which is a key requirement for reverse swing.</p>

      <p>Captains must manage ball preservation as a shared tactical effort. The entire team must follow strict guidelines: only one side is shined with sweat or saliva, while the opposite side is left dry to collect dust and wear naturally. This meticulous care is what transforms a simple sphere of leather and cork into a highly sophisticated piece of aerodynamic equipment.</p>
    `
  },
  {
    id: "football-midfield",
    title: "European Football's Midfield Maestros: The Passing Geometries that Shape Modern Champions League Contests",
    brief: "A deep tactical exploration of how elite midfielders use space manipulation, passing angles, and positional rotation to split organized low-block defenses.",
    author: "Marcella Rossi",
    date: "May 12, 2026",
    category: "Football",
    image: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&q=80&w=800",
    readTime: "5 min read",
    tags: ["Champions League", "Midfield Tactics", "Positional Play", "Spatial Analytics"],
    featured: false,
    content: `
      <h2>The Death of the Classic Playmaker No. 10</h2>
      <p>The historic era of the static No. 10 playmaker—the player who floated in front of the defensive line awaiting the ball to make a single creative pass—is effectively over. In modern European football, elite defensive systems have become extremely compact. Teams defend in tight blocks of 4-4-2 or 5-4-1, restricting space between lines to a minimum. To counter this defensive discipline, creative responsibilities have shifted to deep-lying midfielders and mobile interior runners, who manipulate passing lanes through continuous movement.</p>

      <p>Modern managers focus on opening up the opposition’s 'half-spaces'—the channels between the central defenders and the fullbacks. Tactical midfielders operate in these channels to draw out center-backs and create space for overlapping wingers or deep-running strikers.</p>

      <h2>The Geometry of Passing: Creating Rhythmic Triangles</h2>
      <p>The core of controlling a possession-based game lies in forming continuous passing triangles. When a midfielder receives the ball, they should instantly have two passing options that form a triangle relative to the nearest defender. This forces opponents to continuously adjust their positioning, wearing them down both physically and mentally. This style requires players to possess elite spatial awareness and technical execution under high pressure.</p>

      <p>Modern analytics tracking shows that the best midfielders do not necessarily run the fastest, but they process visual data quicker than anyone else. By scanning the pitch continuously prior to receiving the ball, they map out the density of defenders and predict passing lanes in real-time, executing defense-splitting passes in fractions of a second.</p>
    `
  },
  {
    id: "basketball-spacing",
    title: "The Spatial Analytics of the Modern Basketball Offense: How the Three-Point Revolution Redefined the In-Game Court",
    brief: "We look at the mathematical and visual evidence proving how offensive spacing, high pick-and-rolls, and the hunt for corner threes have expanded the basketball court.",
    author: "Terrence Vance",
    date: "May 08, 2026",
    category: "Basketball",
    image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&q=80&w=800",
    readTime: "5 min read",
    tags: ["NBA", "Analytics Revolution", "Court Spacing", "Three-Point Strategy"],
    featured: false,
    content: `
      <h2>The Mathematics of Spacing</h2>
      <p>Over the last decade, professional basketball offensive layouts underwent a massive transformation. The mid-range jump shot, once the absolute staple of superstar players, is increasingly rare. Today’s offense is built on offensive spacing, high pick-and-rolls, and a heavy volume of three-point field goals. This change is not just about trend-chasing; it is a calculated decision backed by advanced statistical modeling.</p>

      <p>The math of three-point efficiency is simple yet powerful: shooting 35% from the three-point arc yields the same offensive return as shooting 52.5% from inside the two-point area. This reality shifted how coaches design plays. By placing deep-range shooters deep in the corners and along the perimeter, offenses force defenders to guard them closely, opening up clear driving lanes for explosive point guards and athletic slashers.</p>

      <h2>The Strategic Gravity of the Corner Three</h2>
      <p>In modern basketball, the 'corner three' is one of the most efficient shots in the game. It is situated closer to the hoop than a standard three-pointer (22 feet compared to 23.9 feet), yet it still awards three full points. Threatening with a corner shooter forces the opposing defense to make difficult, split-second decisions: do they stay home on the shooter, or collapse inside to stop a driving player? This strategic tension is the foundation of high-scoring, entertaining modern offenses.</p>
    `
  }
];

export const LIVE_SCORES: MatchScore[] = [
  {
    id: "m-1",
    sport: "Cricket",
    league: "International Test Match",
    teamA: "India",
    teamB: "Australia",
    scoreA: "342/6 & 112/2",
    scoreB: "288 & 165",
    status: "LIVE",
    statusText: "Day 4 - India lead by 201 runs",
    venue: "Melbourne Cricket Ground",
    oversOrPeriod: "Overs: 38.4 (2nd Innings)",
    summary: "Virat Kohli 48* (72), Mitchell Starc 2/45. Exciting finish set up!"
  },
  {
    id: "m-2",
    sport: "Football",
    league: "UEFA Champions League",
    teamA: "Real Madrid",
    teamB: "Bayern Munich",
    scoreA: "2",
    scoreB: "1",
    status: "LIVE",
    statusText: "Second Half",
    venue: "Santiago Bernabeu",
    oversOrPeriod: "78'",
    summary: "Bellingham '42, Vinicius '61 | Kane '14. High intensity end-to-end action!"
  },
  {
    id: "m-3",
    sport: "Cricket",
    league: "T20 International Series",
    teamA: "England",
    teamB: "Pakistan",
    scoreA: "188/4 (20 ov)",
    scoreB: "189/3 (19.1 ov)",
    status: "FINISHED",
    statusText: "Pakistan won by 7 wickets",
    venue: "Lord's Cricket Ground",
    oversOrPeriod: "Completed",
    summary: "Babar Azam 82 (54) spearheaded the match-winning run chase under lights."
  },
  {
    id: "m-4",
    sport: "Basketball",
    league: "NBA Playoffs",
    teamA: "Boston Celtics",
    teamB: "Miami Heat",
    scoreA: "102",
    scoreB: "98",
    status: "FINISHED",
    statusText: "Final Score",
    venue: "TD Garden",
    oversOrPeriod: "Full Time",
    summary: "Tatum's 34-point performance seals the series for Boston."
  },
  {
    id: "m-5",
    sport: "Tennis",
    league: "Roland Garros - Quarter Final",
    teamA: "Carlos Alcaraz",
    teamB: "Jannik Sinner",
    scoreA: "6 [4] 6 3",
    scoreB: "4 [6] 3 2*",
    status: "LIVE",
    statusText: "Set 4 in progress",
    venue: "Court Philippe-Chatrier",
    oversOrPeriod: "Set 4",
    summary: "Alcaraz leads by 2 sets to 1. Serving at 3-2 in fourth set."
  }
];
