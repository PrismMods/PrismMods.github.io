// Shared by every page: theme toggle, language toggle, the strings they read,
// and the step switch for pinned scenes. Each page's <head> has already applied
// any saved theme and language before paint; this wires the buttons and text.

const root = document.documentElement;
const btn = document.getElementById('theme-toggle');
const label = () => {
  const dark = getComputedStyle(root).getPropertyValue('--is-dark').trim() === '1';
  const dict = STRINGS[lang];
  btn.setAttribute('aria-label', dark ? dict.THEME_TO_LIGHT : dict.THEME_TO_DARK);
};
btn.addEventListener('click', () => {
  const dark = getComputedStyle(root).getPropertyValue('--is-dark').trim() === '1';
  root.dataset.theme = dark ? 'light' : 'dark';
  try { localStorage.setItem('theme', root.dataset.theme); } catch (e) { }
  label();
});
matchMedia('(prefers-color-scheme: dark)').addEventListener('change', label);

// Locale codes and key style follow PrismMods/Quartz-i18n. Product names stay
// in Latin script there, so they stay in Latin here too. One table for every
// page, so a translator only ever opens this file.
const STRINGS = {
  'en-US': {
    LANG_NAME: '한국어',
    LANG_SWITCH: 'Switch to Korean',
    SKIP_TO_MODS: 'Skip to the mods',
    SKIP_TO_CONTENT: 'Skip to content',
    FOOTER_NOTE: 'Community mods. Not affiliated with 7th Beat Games.',
    THEME_TO_DARK: 'Switch to dark theme',
    THEME_TO_LIGHT: 'Switch to light theme',
    PAGER_LABEL: 'Mods',
    CAT_GAMEPLAY: 'Gameplay',
    CAT_GAMEPLAY_LITE: 'Gameplay, lite',
    CAT_EDITOR: 'Editor',
    CAT_MULTIPLAYER: 'Multiplayer',
    STAGE_ALPHA: 'Alpha',
    STAGE_STABLE: 'Stable',
    STAGE_DEV: 'In development',
    STAGE_BETA: 'Beta',
    STAGE_PRE: 'Pre-release',
    BTN_DOWNLOAD: 'Download',
    BTN_DOCS: 'Docs',
    BTN_SOURCE: 'Source',
    BTN_SITE: 'quartzz.xyz',
    BTN_INSTALL: 'Install guide',
    BTN_FOLLOW: 'GitHub',
    GET_HEADING: 'Install',
    MORE_HEADING: 'Other features',

    PAGE_TITLE: 'PrismMods — Mods for A Dance of Fire and Ice',
    PAGE_DESC: 'Quartz, Topaz, Sapphire and Amethyst: free, open-source mods for A Dance of Fire and Ice.',
    GAME_TITLE: 'A Dance of Fire and Ice',
    LEDE: 'Gameplay, level editing, and online play — one mod each, all free and open source.',
    MODS_HEADING: 'The mod collection',
    QUARTZ_BLURB: 'The all-in-one mod, and the place to start.',
    SAPPHIRE_BLURB: 'A suite of tools for the level editor, for charters and VFXers.',
    TOPAZ_BLURB: 'Quartz stripped down, for those who only want the overlays and basics.',
    AMETHYST_BLURB: 'Online multiplayer, currently in development.',
    CREDITS_HEADING: 'Credits',
    CREDITS_DEVS: 'Developers',
    CREDITS_THANKS: 'Special thanks',
    CREDITS_TESTERS: 'and every early supporter and alpha/beta tester',

    QUARTZ_TITLE: 'Quartz — PrismMods',
    QUARTZ_DESC: 'Quartz is the all-in-one mod for A Dance of Fire and Ice: overlays, input tools, calibration and community levels in one in-game menu.',
    QUARTZ_TAG: 'An all-in-one mod for A Dance of Fire and Ice.',
    QUARTZ_STATEMENT: 'Quartz adds overlays, input tools, calibration, visual tweaks and a TUF level browser to the game. Every feature is built in and turned on or off from one tab.',
    QUARTZ_S1_TITLE: 'Features',
    QUARTZ_S1_BODY: 'Every feature ships inside Quartz. The Features tab turns each one on or off, and turning one on also turns on what it needs.',
    QUARTZ_S2_TITLE: 'Overlays',
    QUARTZ_S2_BODY: 'Key viewer, combo, judgements, progress bar, song title and custom stat panels. The menu key opens the reorganize hub, where they are dragged, resized, rotated and anchored.',
    QUARTZ_S3_TITLE: 'TUF levels',
    QUARTZ_S3_BODY: 'Browse, download and play TUF levels and packs inside the game.',
    QUARTZ_F_CALIBRATION: 'Calibration',
    QUARTZ_F_CALIBRATION_LINE: 'Sets the input offset from play, with timing history per map.',
    QUARTZ_F_ANTICHATTER: 'AntiChatter',
    QUARTZ_F_ANTICHATTER_LINE: 'Drops double inputs from a chattering key and keeps a bouncing hold from breaking.',
    QUARTZ_F_INPUT: 'Key limiter',
    QUARTZ_F_INPUT_LINE: 'Limits gameplay input to chosen keys.',
    QUARTZ_F_PRACTICE: 'Practice difficulty',
    QUARTZ_F_PRACTICE_LINE: 'Keys that switch difficulty and pitch mid-level.',
    QUARTZ_F_RESTRICTION: 'Judgement restriction',
    QUARTZ_F_RESTRICTION_LINE: 'Fails a run early on a judgement rule or a miss cap.',
    QUARTZ_F_TILEARC: 'Tile Arc',
    QUARTZ_F_TILEARC_LINE: 'Rounds the corner of every tile turn, as far as you choose.',
    QUARTZ_F_PLANETS: 'Planet colours',
    QUARTZ_F_PLANETS_LINE: 'Custom planet and tail colours.',
    QUARTZ_F_EDITOR: 'Editor tools',
    QUARTZ_F_EDITOR_LINE: 'Editor readouts, a BGA mod, and tile flip and rotate.',
    QUARTZ_F_PROFILES: 'Profiles',
    QUARTZ_F_PROFILES_LINE: 'Separate settings profiles, shareable as files.',
    QUARTZ_F_EFFECTS: 'Effect remover',
    QUARTZ_F_EFFECTS_LINE: 'Removes level effects, in Simple or Enhanced mode.',
    QUARTZ_F_ADDONS: 'Addons',
    QUARTZ_F_ADDONS_LINE: 'Community addons with their own settings, panels and text tags.',
    QUARTZ_F_OPTIMIZER: 'Optimizer',
    QUARTZ_F_OPTIMIZER_LINE: 'GC timing, process priority, bloom and other performance options.',
    QUARTZ_GET_NOTE: 'Quartz has its own site and docs at quartzz.xyz. It runs on MelonLoader (recommended) or UnityModManager.',

    SAPPHIRE_TITLE: 'Sapphire — PrismMods',
    SAPPHIRE_DESC: 'Sapphire is an editor suite for A Dance of Fire and Ice: a toolbar, an event timeline, keyboard charting and audio analysis on top of the level editor.',
    SAPPHIRE_TAG: 'An editor suite for the A Dance of Fire and Ice level editor.',
    SAPPHIRE_STATEMENT: 'Sapphire adds a toolbar, an event timeline, keyboard charting, audio analysis and other tools to the level editor. Levels made with it play in the unmodded game.',
    SAPPHIRE_S1_TITLE: 'Docking',
    SAPPHIRE_S1_BODY: 'Windows dock into the sidebars as tabs and can be pulled back out. The layout can be kept between sessions.',
    SAPPHIRE_S2_TITLE: 'Quick charting',
    SAPPHIRE_S2_BODY: 'Twirls, speed changes, pauses and holds are bound to single keys. The angle pad places runs of tiles from relative angles, with a preview.',
    SAPPHIRE_S3_TITLE: 'Event timeline',
    SAPPHIRE_S3_BODY: 'Events are shown on the song\'s time axis. Cam mode adds position, rotation and zoom lanes, eases, bezier curves and a graph editor for MoveCamera.',
    SAPPHIRE_S4_TITLE: 'Variables and Script',
    SAPPHIRE_S4_BODY: 'Number fields accept formulas like $beat*2 that update with the variables. Scripts compile into regular events.',
    SAPPHIRE_S5_TITLE: 'Shape library',
    SAPPHIRE_S5_BODY: 'Reusable shapes in a dockable palette, with a preview for each key count. Shapes can be saved from the angle pad or from selected tiles.',
    SAPPHIRE_F_HZ: 'Hz tool',
    SAPPHIRE_F_HZ_LINE: 'Charting by frequency. Calculates the angle, BPM and SetSpeed for a pitch.',
    SAPPHIRE_F_AUDIO: 'Audio window',
    SAPPHIRE_F_AUDIO_LINE: 'Tempo curve, offset suggestions and a metronome on the level\'s grid.',
    SAPPHIRE_F_TOOLBAR: 'Toolbar',
    SAPPHIRE_F_TOOLBAR_LINE: 'Circular path, free angle, pseudo, zip, VFX preview and an event eyedropper.',
    SAPPHIRE_F_FIELDS: 'Number fields',
    SAPPHIRE_F_FIELDS_LINE: 'Arithmetic in fields, drag-to-scrub labels and ranked search.',
    SAPPHIRE_F_COLOUR: 'Colour wheel',
    SAPPHIRE_F_COLOUR_LINE: 'HSV colour picker for all colour values.',
    SAPPHIRE_F_TRAY: 'Event tray',
    SAPPHIRE_F_TRAY_LINE: 'A visible clipboard for events. Drag events in and out.',
    SAPPHIRE_F_FILTERS: 'Filter browser',
    SAPPHIRE_F_FILTERS_LINE: 'Searchable list of SetFilterAdvanced filters, by category.',
    SAPPHIRE_F_DECO: 'Decorations',
    SAPPHIRE_F_DECO_LINE: 'Decoration list by tag or thumbnail. Full editing for particles and objects.',
    SAPPHIRE_F_MODES: 'Edit and Play mode',
    SAPPHIRE_F_MODES_LINE: 'Switches between a charting view and a playtest view.',
    SAPPHIRE_GET_NOTE: 'Alpha. Runs on UnityModManager, or on MelonLoader with UMMCompat.',

    TOPAZ_TITLE: 'Topaz — PrismMods',
    TOPAZ_DESC: 'Topaz is the lite edition of Quartz for A Dance of Fire and Ice: in-game stats, a key viewer, custom fonts and a few quality-of-life fixes.',
    TOPAZ_TAG: 'A lighter version of Quartz with overlays and basic tools.',
    TOPAZ_STATEMENT: 'Topaz is the lite version of Quartz: in-game stats, a key viewer, custom fonts and a few fixes. Most settings can be adjusted in detail.',
    TOPAZ_S1_TITLE: 'Overlay',
    TOPAZ_S1_BODY: 'Progress, accuracy, X-accuracy, BPM, timing scale, judgements, combo and attempts. Each can be turned on or off, positioned and coloured.',
    TOPAZ_S2_TITLE: 'Key viewer',
    TOPAZ_S2_BODY: 'Hand and foot presets, key rain, ghost keys and saved press counts. Imports and exports DM Note presets.',
    TOPAZ_S3_TITLE: 'Game UI',
    TOPAZ_S3_BODY: 'The game\'s own HUD elements can be moved, scaled or hidden, and its text can use a custom font.',
    TOPAZ_F_LIMITER: 'Key limiter',
    TOPAZ_F_LIMITER_LINE: 'Only selected keys count as input.',
    TOPAZ_F_CHATTER: 'Chatter blocker',
    TOPAZ_F_CHATTER_LINE: 'Ignores repeat presses that come too quickly.',
    TOPAZ_F_FONTS: 'Custom fonts',
    TOPAZ_F_FONTS_LINE: 'Font packs or your own .ttf and .otf files, for the overlay and game text.',
    TOPAZ_F_HIDE: 'Hide UI',
    TOPAZ_F_HIDE_LINE: 'Hides the HUD, hit error meter, autoplay text, judgements, song title and more.',
    TOPAZ_F_ATTEMPTS: 'Attempts',
    TOPAZ_F_ATTEMPTS_LINE: 'Attempt counts per level, saved between sessions.',
    TOPAZ_F_DMNOTE: 'DM Note presets',
    TOPAZ_F_DMNOTE_LINE: 'Imports and exports DM Note key viewer presets.',
    TOPAZ_F_TOOLS: 'Log viewer and reload',
    TOPAZ_F_TOOLS_LINE: 'In-game log viewer and one-click reload.',
    TOPAZ_F_UPDATES: 'Updates',
    TOPAZ_F_UPDATES_LINE: 'Checks for new releases and installs them.',
    TOPAZ_GET_NOTE: 'Requires A Dance of Fire and Ice 3.3.0 or later. Runs on UnityModManager, or on MelonLoader with UMMCompat.',

    AMETHYST_TITLE: 'Amethyst — PrismMods',
    AMETHYST_DESC: 'Amethyst is online multiplayer for A Dance of Fire and Ice, currently in development.',
    AMETHYST_TAG: 'Online multiplayer for A Dance of Fire and Ice.',
    AMETHYST_STATEMENT: 'Amethyst is in development. There is no public repository yet.',
    AMETHYST_GET: 'Updates',
    AMETHYST_GET_NOTE: 'New repositories are published on the PrismMods GitHub.',
  },
  'ko-KR': {
    LANG_NAME: 'English',
    LANG_SWITCH: '영어로 전환',
    SKIP_TO_MODS: '모드 목록으로 건너뛰기',
    SKIP_TO_CONTENT: '본문으로 건너뛰기',
    FOOTER_NOTE: 'Prism Mods는 커뮤니티 프로젝트이며, 7th Beat Games에 소속 및 제휴되지 않았음을 알립니다.',
    THEME_TO_DARK: '다크 테마로 전환',
    THEME_TO_LIGHT: '라이트 테마로 전환',
    PAGER_LABEL: '모드',
    CAT_GAMEPLAY: '게임플레이',
    CAT_GAMEPLAY_LITE: '게임플레이, 라이트',
    CAT_EDITOR: '에디터',
    CAT_MULTIPLAYER: '멀티플레이어',
    STAGE_ALPHA: '알파',
    STAGE_STABLE: '정식 버전',
    STAGE_DEV: '개발 중',
    STAGE_BETA: '베타',
    STAGE_PRE: '프리릴리스',
    BTN_DOWNLOAD: '다운로드',
    BTN_DOCS: '문서',
    BTN_SOURCE: '소스',
    BTN_SITE: 'quartzz.xyz',
    BTN_INSTALL: '설치 안내',
    BTN_FOLLOW: 'GitHub',
    GET_HEADING: '설치',
    MORE_HEADING: '기타 기능',

    PAGE_TITLE: 'PrismMods — 얼음과 불의 춤 모드',
    PAGE_DESC: 'Quartz, Topaz, Sapphire, Amethyst — 얼음과 불의 춤을 위한 무료 오픈 소스 모드.',
    GAME_TITLE: '불과 얼음의 춤',
    LEDE: '게임플레이, 레벨 에디터, 온라인 플레이 — 각각 하나의 모드로, 모두 무료 오픈 소스입니다.',
    MODS_HEADING: '모드 목록',
    QUARTZ_BLURB: '올인원 (all-in-one) 모드입니다. 이곳에서 시작하세요.',
    SAPPHIRE_BLURB: '레벨 에디터를 위한 도구 모음입니다. 채보와 VFX 제작자를 위해 만들어졌습니다.',
    TOPAZ_BLURB: '오버레이와 기본 기능만 필요한 분들을 위한 Quartz의 경량 버전입니다.',
    AMETHYST_BLURB: '온라인 멀티플레이어입니다. 현재 개발 중입니다.',
    CREDITS_HEADING: '크레딧',
    CREDITS_DEVS: '개발자',
    CREDITS_THANKS: '특별 감사',
    CREDITS_TESTERS: '그리고 초기 서포터와 알파·베타 테스터 여러분께 감사드립니다.',

    QUARTZ_TITLE: 'Quartz — PrismMods',
    QUARTZ_DESC: 'Quartz는 얼음과 불의 춤을 위한 올인원 모드입니다. 오버레이, 입력 도구, 보정, 커뮤니티 레벨을 게임 안의 메뉴 하나에 담았습니다.',
    QUARTZ_TAG: '얼음과 불의 춤을 위한 올인원 모드.',
    QUARTZ_STATEMENT: 'Quartz는 오버레이, 입력 도구, 보정, 비주얼 트윅, TUF 레벨 브라우저를 게임에 추가합니다. 모든 기능이 내장되어 있고, 탭 하나에서 켜고 끕니다.',
    QUARTZ_S1_TITLE: '기능',
    QUARTZ_S1_BODY: '모든 기능이 Quartz 안에 들어 있습니다. 기능 탭에서 하나씩 켜고 끄며, 기능을 켜면 그 기능에 필요한 기능도 함께 켜집니다.',
    QUARTZ_S2_TITLE: '오버레이',
    QUARTZ_S2_BODY: '키 뷰어, 콤보, 판정, 진행 바, 곡 제목, 사용자 통계 패널. 메뉴 키로 여는 재배치 허브에서 끌어서 옮기고, 크기와 각도를 바꾸고, 앵커를 정합니다.',
    QUARTZ_S3_TITLE: 'TUF 레벨',
    QUARTZ_S3_BODY: '게임 안에서 TUF 레벨과 레벨 팩을 찾아보고, 다운로드하고, 플레이합니다.',
    QUARTZ_F_CALIBRATION: '보정',
    QUARTZ_F_CALIBRATION_LINE: '플레이 기록으로 입력 오프셋을 맞추고, 맵별 타이밍 기록을 남깁니다.',
    QUARTZ_F_ANTICHATTER: 'AntiChatter',
    QUARTZ_F_ANTICHATTER_LINE: '채터링으로 두 번 들어간 입력을 걸러내고, 누르고 있는 키가 튀어도 홀드가 끊기지 않게 합니다.',
    QUARTZ_F_INPUT: '키 리미터',
    QUARTZ_F_INPUT_LINE: '게임 입력을 정한 키로 제한합니다.',
    QUARTZ_F_PRACTICE: '연습 난이도',
    QUARTZ_F_PRACTICE_LINE: '레벨 중에 난이도와 피치를 바꾸는 키.',
    QUARTZ_F_RESTRICTION: '판정 제한',
    QUARTZ_F_RESTRICTION_LINE: '판정 규칙이나 미스 한도에 걸리면 바로 실패 처리합니다.',
    QUARTZ_F_TILEARC: '타일 곡선',
    QUARTZ_F_TILEARC_LINE: '모든 타일 꺾임의 바깥 모서리를 원하는 만큼 둥글게 만듭니다.',
    QUARTZ_F_PLANETS: '행성 색상',
    QUARTZ_F_PLANETS_LINE: '행성과 꼬리의 색을 바꿉니다.',
    QUARTZ_F_EDITOR: '에디터 도구',
    QUARTZ_F_EDITOR_LINE: '에디터 정보 표시, BGA 모드, 타일 반전과 회전.',
    QUARTZ_F_PROFILES: '프로필',
    QUARTZ_F_PROFILES_LINE: '설정 프로필을 나누고 파일로 공유합니다.',
    QUARTZ_F_EFFECTS: '이펙트 제거',
    QUARTZ_F_EFFECTS_LINE: '레벨 이펙트를 간단 또는 고급 모드로 제거합니다.',
    QUARTZ_F_ADDONS: '애드온',
    QUARTZ_F_ADDONS_LINE: '설정, 패널, 텍스트 태그를 추가하는 커뮤니티 애드온.',
    QUARTZ_F_OPTIMIZER: '최적화',
    QUARTZ_F_OPTIMIZER_LINE: 'GC 타이밍, 프로세스 우선순위, 블룸 등 성능 설정.',
    QUARTZ_GET_NOTE: 'Quartz의 사이트와 문서는 quartzz.xyz에 있습니다. MelonLoader(권장) 또는 UnityModManager에서 실행됩니다.',

    SAPPHIRE_TITLE: 'Sapphire — PrismMods',
    SAPPHIRE_DESC: 'Sapphire는 얼음과 불의 춤을 위한 에디터 도구 모음입니다. 레벨 에디터 위에 툴바, 이벤트 타임라인, 키보드 차팅, 오디오 분석을 더합니다.',
    SAPPHIRE_TAG: '얼음과 불의 춤 레벨 에디터를 위한 에디터 도구 모음.',
    SAPPHIRE_STATEMENT: 'Sapphire는 레벨 에디터에 툴바, 이벤트 타임라인, 키보드 차팅, 오디오 분석 등의 도구를 추가합니다. 만든 레벨은 모드 없이도 플레이됩니다.',
    SAPPHIRE_S1_TITLE: '도킹',
    SAPPHIRE_S1_BODY: '창을 사이드바에 탭으로 도킹하고 다시 꺼낼 수 있습니다. 배치는 재시작 후에도 유지할 수 있습니다.',
    SAPPHIRE_S2_TITLE: '빠른 차팅',
    SAPPHIRE_S2_BODY: '회전, 속도 변경, 일시정지, 홀드를 키 하나로 입력합니다. 각도 패드는 상대 각도로 여러 타일을 미리보기와 함께 배치합니다.',
    SAPPHIRE_S3_TITLE: '이벤트 타임라인',
    SAPPHIRE_S3_BODY: '이벤트를 곡의 시간 축 위에 표시합니다. 카메라 모드에서는 MoveCamera용 위치, 회전, 줌 레인과 이징, 베지어 곡선, 그래프 편집기를 씁니다.',
    SAPPHIRE_S4_TITLE: '변수와 스크립트',
    SAPPHIRE_S4_BODY: '숫자 입력란에 $beat*2 같은 수식을 쓰면 변수에 따라 값이 바뀝니다. 스크립트는 일반 이벤트로 컴파일됩니다.',
    SAPPHIRE_S5_TITLE: '도형 라이브러리',
    SAPPHIRE_S5_BODY: '다시 쓰는 도형을 도킹형 팔레트에 두고, 키 수별 미리보기를 봅니다. 각도 패드나 선택한 타일에서 도형을 저장합니다.',
    SAPPHIRE_F_HZ: 'Hz 도구',
    SAPPHIRE_F_HZ_LINE: '주파수로 차팅합니다. 음높이에 맞는 각도, BPM, SetSpeed를 계산합니다.',
    SAPPHIRE_F_AUDIO: '오디오 창',
    SAPPHIRE_F_AUDIO_LINE: '템포 곡선, 오프셋 제안, 레벨 그리드에 맞춘 메트로놈.',
    SAPPHIRE_F_TOOLBAR: '툴바',
    SAPPHIRE_F_TOOLBAR_LINE: '원형 경로, 자유 각도, 동타, 드르륵, VFX 미리보기, 이벤트 스포이드.',
    SAPPHIRE_F_FIELDS: '숫자 입력란',
    SAPPHIRE_F_FIELDS_LINE: '입력란 계산식, 라벨 드래그로 값 조절, 순위 검색.',
    SAPPHIRE_F_COLOUR: '색상 휠',
    SAPPHIRE_F_COLOUR_LINE: '모든 색상 값에 쓰는 HSV 색상 선택기.',
    SAPPHIRE_F_TRAY: '이벤트 트레이',
    SAPPHIRE_F_TRAY_LINE: '이벤트를 끌어 넣고 꺼내는 클립보드.',
    SAPPHIRE_F_FILTERS: '필터 브라우저',
    SAPPHIRE_F_FILTERS_LINE: 'SetFilterAdvanced 필터를 분류별로 검색합니다.',
    SAPPHIRE_F_DECO: '장식',
    SAPPHIRE_F_DECO_LINE: '태그나 썸네일로 보는 장식 목록. 파티클과 오브젝트를 모두 편집합니다.',
    SAPPHIRE_F_MODES: '편집 모드와 플레이 모드',
    SAPPHIRE_F_MODES_LINE: '차팅 화면과 플레이테스트 화면을 전환합니다.',
    SAPPHIRE_GET_NOTE: '알파 버전입니다. UnityModManager 또는 UMMCompat을 통한 MelonLoader에서 실행됩니다.',

    TOPAZ_TITLE: 'Topaz — PrismMods',
    TOPAZ_DESC: 'Topaz는 얼음과 불의 춤을 위한 Quartz의 라이트 버전입니다. 인게임 통계, 키 뷰어, 커스텀 폰트, 몇 가지 편의 기능을 담았습니다.',
    TOPAZ_TAG: '오버레이와 기본 도구만 담은 Quartz의 라이트 버전.',
    TOPAZ_STATEMENT: 'Topaz는 Quartz의 라이트 버전으로, 인게임 통계, 키 뷰어, 커스텀 폰트와 몇 가지 수정 사항을 담고 있습니다. 대부분의 설정을 세밀하게 조정할 수 있습니다.',
    TOPAZ_S1_TITLE: '오버레이',
    TOPAZ_S1_BODY: '진행도, 정확도, X-정확도, BPM, 타이밍 스케일, 판정, 콤보, 시도 횟수. 항목마다 켜고 끄고, 위치와 색을 정합니다.',
    TOPAZ_S2_TITLE: '키 뷰어',
    TOPAZ_S2_BODY: '손/발 프리셋, 키 레인, 고스트 키, 저장되는 입력 횟수. DM Note 프리셋을 가져오고 내보냅니다.',
    TOPAZ_S3_TITLE: '게임 UI',
    TOPAZ_S3_BODY: '게임 HUD 요소를 옮기거나 크기를 바꾸거나 숨기고, 게임 텍스트에 커스텀 폰트를 적용합니다.',
    TOPAZ_F_LIMITER: '키 리미터',
    TOPAZ_F_LIMITER_LINE: '정한 키만 입력으로 인정합니다.',
    TOPAZ_F_CHATTER: '채터링 차단',
    TOPAZ_F_CHATTER_LINE: '너무 빠르게 반복된 입력을 무시합니다.',
    TOPAZ_F_FONTS: '커스텀 폰트',
    TOPAZ_F_FONTS_LINE: '폰트 팩이나 직접 넣은 .ttf, .otf 파일을 오버레이와 게임 텍스트에 씁니다.',
    TOPAZ_F_HIDE: 'UI 숨기기',
    TOPAZ_F_HIDE_LINE: 'HUD, 판정선, 자동 플레이 텍스트, 판정, 곡 제목 등을 숨깁니다.',
    TOPAZ_F_ATTEMPTS: '시도 횟수',
    TOPAZ_F_ATTEMPTS_LINE: '레벨별 시도 횟수를 저장합니다.',
    TOPAZ_F_DMNOTE: 'DM Note 프리셋',
    TOPAZ_F_DMNOTE_LINE: 'DM Note 키 뷰어 프리셋을 가져오고 내보냅니다.',
    TOPAZ_F_TOOLS: '로그 뷰어와 새로고침',
    TOPAZ_F_TOOLS_LINE: '인게임 로그 뷰어와 원클릭 새로고침.',
    TOPAZ_F_UPDATES: '업데이트',
    TOPAZ_F_UPDATES_LINE: '새 릴리스를 확인하고 설치합니다.',
    TOPAZ_GET_NOTE: '얼음과 불의 춤 3.3.0 이상이 필요합니다. UnityModManager 또는 UMMCompat을 통한 MelonLoader에서 실행됩니다.',

    AMETHYST_TITLE: 'Amethyst — PrismMods',
    AMETHYST_DESC: 'Amethyst는 얼음과 불의 춤을 위한 온라인 멀티플레이어 모드로, 현재 개발 중입니다.',
    AMETHYST_TAG: '얼음과 불의 춤을 위한 온라인 멀티플레이어.',
    AMETHYST_STATEMENT: 'Amethyst는 개발 중이며, 아직 공개 저장소가 없습니다.',
    AMETHYST_GET: '소식',
    AMETHYST_GET_NOTE: '새 저장소는 PrismMods GitHub에 공개됩니다.',
  },
};

const langBtn = document.getElementById('lang-toggle');
let lang = STRINGS[root.lang] ? root.lang : 'en-US';

// Pretendard covers Hangul; Geist stays ahead of it in the stack so Latin
// keeps its own face. 53KB of CSS, so it only loads once Korean is asked for.
let korFont = false;
const loadKorean = () => {
  if (korFont) return;
  korFont = true;
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = 'https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9'
    + '/dist/web/variable/pretendardvariable-dynamic-subset.min.css';
  document.head.append(link);
};

const applyLang = (next) => {
  lang = STRINGS[next] ? next : 'en-US';
  const dict = STRINGS[lang];
  root.lang = lang;
  // <title> and <meta name="description"> carry keys too, so each page names
  // its own title without a special case here.
  for (const el of document.querySelectorAll('[data-i18n]')) {
    const text = dict[el.dataset.i18n];
    if (el.tagName === 'META') el.content = text;
    else el.textContent = text;
  }
  for (const el of document.querySelectorAll('[data-i18n-label]')) {
    el.setAttribute('aria-label', dict[el.dataset.i18nLabel]);
  }
  langBtn.textContent = dict.LANG_NAME;
  langBtn.setAttribute('lang', lang === 'en-US' ? 'ko' : 'en');
  langBtn.setAttribute('aria-label', dict.LANG_SWITCH);
  label();
  if (lang === 'ko-KR') loadKorean();
};

langBtn.addEventListener('click', () => {
  applyLang(lang === 'ko-KR' ? 'en-US' : 'ko-KR');
  try { localStorage.setItem('lang', lang); } catch (e) { }
});

applyLang(lang);

// Latest releases: the newest stable and, when it is newer still, the newest
// alpha or beta, read from GitHub. Unauthenticated calls get 60 an hour per
// visitor, so each repo's answer is kept for an hour. Quartz also keeps rolling
// latest-* releases; only version tags count.
const VERSION_TAG = /^v?\d/;
const preKey = (tag) =>
  /beta|-b\d/i.test(tag) ? 'STAGE_BETA' : /alpha|-a\d/i.test(tag) ? 'STAGE_ALPHA' : 'STAGE_PRE';

const releases = async (repo) => {
  const key = 'releases:' + repo;
  try {
    const hit = JSON.parse(localStorage.getItem(key));
    if (hit && Date.now() - hit.t < 36e5) return hit.v;
  } catch (e) { }
  const api = 'https://api.github.com/repos/' + repo + '/releases';
  // /latest is 404 when a repo has no stable release yet; anything else failing
  // (a rate limit, say) shows nothing rather than a half answer.
  const read = (r) => (r.ok ? r.json() : r.status === 404 ? null : Promise.reject(r.status));
  const [latest, recent] = await Promise.all([
    fetch(api + '/latest').then(read),
    fetch(api + '?per_page=5').then(read),
  ]);
  const stable = latest && VERSION_TAG.test(latest.tag_name) ? latest : null;
  const pre = (recent || []).find((r) => r.prerelease && !r.draft && VERSION_TAG.test(r.tag_name)
    && (!stable || r.published_at > stable.published_at));
  const slim = (r) => r && { tag: r.tag_name, url: r.html_url };
  const v = { stable: slim(stable), pre: slim(pre) };
  try { localStorage.setItem(key, JSON.stringify({ t: Date.now(), v })); } catch (e) { }
  return v;
};

for (const el of document.querySelectorAll('[data-repo]')) {
  releases(el.dataset.repo).then(({ stable, pre }) => {
    // Home rows are links already, so their versions are plain text.
    const tag = el.closest('a') ? 'span' : 'a';
    el.replaceChildren(...[[stable, 'STAGE_STABLE'], [pre, pre && preKey(pre.tag)]]
      .filter(([r]) => r)
      .map(([r, k]) => {
        const item = document.createElement(tag);
        if (tag === 'a') item.href = r.url;
        const stage = document.createElement('span');
        stage.dataset.i18n = k;
        stage.textContent = STRINGS[lang][k];
        item.append(stage, ' ' + r.tag);
        return item;
      }));
  }, () => { });
}

// Pinned scenes: whichever step crosses the reading line owns the stage. The
// scrubbed motion inside each pane is CSS; only the swap between panes needs
// script, so browsers without scroll timelines still get the right picture.
// The line sits just under the sticky stage on phones and near the middle on
// wider screens, which is where the eye already is in both layouts.
for (const scene of document.querySelectorAll('.scene')) {
  const parts = scene.querySelectorAll('[data-step]');
  const reading = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      const step = entry.target.dataset.step;
      parts.forEach((el) => el.classList.toggle('on', el.dataset.step === step));
    }
  }, { rootMargin: '-58% 0px -41% 0px' });
  scene.querySelectorAll('.step').forEach((el) => reading.observe(el));
}

// ---------------------------------------------------------------------------
// Crystals. Each mod page turns its own mineral in the hero, drawn with WebGL
// and turning further as the page scrolls. Crystals are convex parts of
// glass, each drawn back faces first and then front faces, farthest part
// first, all blended.
// ---------------------------------------------------------------------------

const rgb = (s) => {
  const m = /^#?([\da-f]{6})$/i.exec(s.trim());
  const n = m ? parseInt(m[1], 16) : 0x8b5cf6;
  return [(n >> 16) / 255, ((n >> 8) & 255) / 255, (n & 255) / 255];
};
const sub = (a, b) => [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
const add = (a, b) => [a[0] + b[0], a[1] + b[1], a[2] + b[2]];
const dot = (a, b) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
const unit = (a) => { const l = Math.hypot(...a) || 1; return [a[0] / l, a[1] / l, a[2] / l]; };
const cross = (a, b) => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
const mean = (ps) => ps.reduce((m, p) => [m[0] + p[0] / ps.length, m[1] + p[1] / ps.length, m[2] + p[2] / ps.length], [0, 0, 0]);
const scale = (a, k) => [a[0] * k, a[1] * k, a[2] * k];

const ring = (n, r, y) => Array.from({ length: n }, (_, i) => {
  const a = (i / n) * 2 * Math.PI;
  return [r * Math.cos(a), y, r * Math.sin(a)];
});

// A convex solid from vertices and faces: outward normals (away from its
// centre, so winding never matters), a tint per vertex for colour zoning, and
// its edges as lines. Each edge carries the sum of its two faces' normals, so
// the shader can tell an edge at the front from one round the back.
const solid = ({ v, f, tint }, alpha = 1) => {
  const c = mean(v), faces = [], seen = new Map();
  for (const idx of f) {
    const pts = idx.map((i) => v[i]);
    // Newell's normal, from every edge, so corners in a line don't matter.
    let n = unit(pts.reduce((s, p, k) => {
      const q = pts[(k + 1) % pts.length];
      return add(s, [(p[1] - q[1]) * (p[2] + q[2]), (p[2] - q[2]) * (p[0] + q[0]), (p[0] - q[0]) * (p[1] + q[1])]);
    }, [0, 0, 0]));
    if (dot(n, sub(mean(pts), c)) < 0) n = scale(n, -1);
    faces.push({ pts, n, tint: idx.map((i) => tint[i]) });
    idx.forEach((a, k) => {
      const b = idx[(k + 1) % idx.length], key = Math.min(a, b) + ',' + Math.max(a, b);
      if (seen.has(key)) seen.get(key).n = unit(add(seen.get(key).n, n));
      else seen.set(key, { a: v[a], b: v[b], n, w: 1 });
    });
  }
  return { faces, lines: [...seen.values()], alpha };
};

// Cuts a convex solid's vertices and faces by a plane, keeping the side where
// dot(p, n) <= k, and closes the cut with a face of its own: a bevel.
const slice = ({ v, f }, n, k) => {
  const side = v.map((p) => dot(p, n) - k), pts = [...v], made = new Map();
  const meet = (a, b) => {
    const key = Math.min(a, b) + ',' + Math.max(a, b);
    if (!made.has(key)) made.set(key, pts.push(add(v[a], scale(sub(v[b], v[a]), side[a] / (side[a] - side[b])))) - 1);
    return made.get(key);
  };
  const faces = f.map((idx) => idx.flatMap((a, j) => {
    const b = idx[(j + 1) % idx.length], keep = side[a] <= 0 ? [a] : [];
    return (side[a] <= 0) === (side[b] <= 0) ? keep : [...keep, meet(a, b)];
  })).filter((idx) => idx.length > 2);
  // The new face: the cut's points in order round their centre.
  const cut = [...made.values()], c = mean(cut.map((i) => pts[i]));
  const u = unit(sub(pts[cut[0]], c)), w = cross(n, u);
  const turn = (i) => Math.atan2(dot(sub(pts[i], c), w), dot(sub(pts[i], c), u));
  faces.push(cut.sort((a, b) => turn(a) - turn(b)));
  // Renumbered, without the vertices cut away.
  const used = [...new Set(faces.flat())], at = new Map(used.map((i, j) => [i, j]));
  return { v: used.map((i) => pts[i]), f: faces.map((idx) => idx.map((i) => at.get(i))) };
};

// Leans a part over its base (about z, then x) and moves it, lines and all.
const place = (part, rz, rx, at) => {
  const cz = Math.cos(rz), sz = Math.sin(rz), cx = Math.cos(rx), sx = Math.sin(rx);
  const R = ([x, y, z]) => {
    const x1 = x * cz - y * sz, y1 = x * sz + y * cz;
    return [x1, y1 * cx - z * sx, y1 * sx + z * cx];
  };
  const P = (p) => add(R(p), at);
  return {
    ...part,
    faces: part.faces.map((f) => ({ ...f, pts: f.pts.map(P), n: R(f.n) })),
    lines: part.lines.map((l) => ({ ...l, a: P(l.a), b: P(l.b), n: R(l.n) })),
  };
};

// One crystal of a cluster, planted `out` from the middle in the direction
// `toward` (degrees round the cluster) and leaning that same way by `lean`
// radians, so a cluster opens upward like a bouquet.
const bouquet = (part, toward, out, lean) => {
  const a = (toward * Math.PI) / 180;
  return place(part, -lean * Math.cos(a), lean * Math.sin(a), [out * Math.cos(a), -1.4, out * Math.sin(a)]);
};

// Quartz's habit: a six-sided prism under a point whose faces alternate large
// and small (the r and z rhombohedra), which is the top ring stepping up and
// down. `foot` points the bottom the same way, out of step; with none the base
// is flat. Tint runs from 0 at the foot to 1 at the tip.
const quartzPoint = ({ r, length, tip, foot = 0, step = 0.2 }, alpha = 1) => {
  const lift = (i) => (i % 2 ? step * r : 0);
  const lo = ring(6, r, 0).map(([x, , z], i) => [x, foot ? -lift(i + 1) : 0, z]);
  const hi = ring(6, r, length).map(([x, , z], i) => [x, length + lift(i), z]);
  const v = [...lo, ...hi, [0, length + step * r + tip, 0]];
  const f = [];
  for (let i = 0; i < 6; i++) {
    const j = (i + 1) % 6;
    f.push([i, j, 6 + j, 6 + i], [6 + i, 6 + j, 12]);
  }
  if (foot) {
    v.push([0, -step * r - foot, 0]);
    for (let i = 0; i < 6; i++) f.push([i, (i + 1) % 6, 13]);
  } else {
    f.push([0, 1, 2, 3, 4, 5]);
  }
  const top = v[12][1], bottom = foot ? v[13][1] : 0;
  return solid({ v, f, tint: v.map(([, y]) => (y - bottom) / (top - bottom)) }, alpha);
};

// Topaz grows as stout prisms, a six-sided lozenge in section, under a
// wedge: two sloping faces meeting in a ridge that runs the lozenge's long
// way, `roof` above the sides and tipped `tip` higher at one end. `bevel`
// takes a corner off the low end's top and the high end's foot, and `heel` a
// smaller one off the low end's foot, each that far in from the side. Tint
// runs from 0 at the foot to 1 at the ridge's top.
const topazPrism = ({ w, d, length, roof, tip = 0, bevel = 0, heel = 0 }) => {
  // Counter-clockwise from the ridge's high end, through the low end.
  const section = [[1, 0], [0.3, 1], [-0.3, 1], [-1, 0], [-0.3, -1], [0.3, -1]].map(([x, z]) => [x * w, z * d]);
  const n = section.length, m = section.findIndex(([x]) => x === -w);
  const v = [
    ...section.map(([x, z]) => [x, 0, z]),
    ...section.map(([x, z]) => [x, length + roof * (1 - Math.abs(z) / d) + (tip * x) / w, z]),
  ];
  // The two roof faces split the top ring where it crosses the ridge.
  const top = (from, to) => Array.from({ length: to - from + 1 }, (_, i) => n + ((from + i) % n));
  const f = [[...Array(n).keys()], top(0, m), top(m, n)];
  for (let i = 0; i < n; i++) f.push([i, (i + 1) % n, n + ((i + 1) % n), n + i]);
  // A bevel is the plane through two points, cutting away what lies to the
  // left going from the first to the second (y up): one on the side, 2.5 ×
  // the bevel along it, the other the bevel in on the ridge or the floor.
  const across = ([x0, y0], [x1, y1]) => { const p = unit([y0 - y1, x1 - x0, 0]); return [p, dot(p, [x0, y0, 0])]; };
  const ridge = (x) => length + roof + (tip * x) / w;
  let shape = { v, f };
  if (bevel) {
    shape = slice(shape, ...across([-w, ridge(-w) - 2.5 * bevel], [-w + bevel, ridge(-w + bevel)]));
    shape = slice(shape, ...across([w, 2.5 * bevel], [w - bevel, 0]));
  }
  if (heel) shape = slice(shape, ...across([-w + heel, 0], [-w, 2.5 * heel]));
  return solid({ ...shape, tint: shape.v.map(([, y]) => y / ridge(w)) });
};

// `pale` is how far glass leans toward clear, `milk` how cloudy it is, and
// `glow` makes it a deep saturated colour with light edges on a dark page.
// `fade` dissolves a crystal's foot into the page over that height, measured
// up from its lowest point.
const CRYSTALS = {
  // Rose quartz: a doubly terminated point, pale and milky.
  quartz: {
    pitch: 0.28, pale: 0.5, milk: 1, parts: [
      place(quartzPoint({ r: 0.95, length: 2.1, tip: 1, foot: 1 }), 0, 0, [0, -1.05, 0]),
    ],
  },
  // Sapphire crystals are steep six-sided bipyramids; here a cluster of them,
  // fading out below.
  sapphire: {
    pitch: 0.22, glow: 1, fade: 0.55, parts: [
      bouquet(quartzPoint({ r: 0.5, length: 0.6, tip: 0.85, step: 0 }), 0, 0, 0.05),
      bouquet(quartzPoint({ r: 0.38, length: 0.45, tip: 0.8, step: 0 }), 20, 0.45, 0.38),
      bouquet(quartzPoint({ r: 0.32, length: 0.3, tip: 0.65, step: 0 }), 85, 0.4, 0.32),
      bouquet(quartzPoint({ r: 0.36, length: 0.4, tip: 0.7, step: 0 }), 150, 0.45, 0.4),
      bouquet(quartzPoint({ r: 0.3, length: 0.3, tip: 0.6, step: 0 }), 210, 0.42, 0.35),
      bouquet(quartzPoint({ r: 0.26, length: 0.25, tip: 0.5, step: 0 }), 270, 0.4, 0.42),
      bouquet(quartzPoint({ r: 0.3, length: 0.35, tip: 0.6, step: 0 }), 330, 0.45, 0.3),
    ],
  },
  // Imperial topaz: one stout crystal under a tipped wedge, bevelled at three
  // corners, leaning a little and fading out below. Nearly opaque, as dim orange glass reads
  // as brown on a dark page.
  topaz: {
    pitch: 0.25, milk: 0.9, fade: 0.3, parts: [
      place(topazPrism({ w: 0.95, d: 0.62, length: 3.1, roof: 0.55, tip: 0.45, bevel: 0.3, heel: 0.12 }), -0.2, 0.08, [0, 0, 0]),
    ],
  },
  // Amethyst is quartz too, but grows in clusters of single points, deepest
  // purple at the tips.
  amethyst: {
    pitch: 0.18, pale: 0.35, fade: 0.5, parts: [
      bouquet(quartzPoint({ r: 0.3, length: 1.8, tip: 0.55, step: 0.3 }), 200, 0.05, 0.1),
      bouquet(quartzPoint({ r: 0.22, length: 1.4, tip: 0.42, step: 0.3 }), 40, 0.32, 0.22),
      bouquet(quartzPoint({ r: 0.18, length: 1, tip: 0.34, step: 0.3 }), 140, 0.3, 0.3),
      bouquet(quartzPoint({ r: 0.15, length: 0.7, tip: 0.28, step: 0.3 }), 290, 0.32, 0.34),
      bouquet(quartzPoint({ r: 0.13, length: 0.5, tip: 0.22, step: 0.3 }), 230, 0.38, 0.4),
      bouquet(quartzPoint({ r: 0.12, length: 0.45, tip: 0.2, step: 0.3 }), 340, 0.36, 0.38),
    ],
  },
};

const LIGHT = unit([-0.45, 0.75, -0.5]); // up, left, and toward the viewer
const FOCAL = 900;                       // in units of a 400 × 400 drawing

// Turns a crystal: a full turn every ~22 s plus a quarter turn per screen of
// scroll. Runs only while on screen, and holds still for reduced motion.
const animate = (el, draw) => {
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) {
    draw(0.6);
    return;
  }
  let raf = 0;
  const tick = (t) => {
    const scrolled = (window.scrollY || 0) / (window.innerHeight || 800);
    draw(t * 0.00028 + scrolled * 1.6);
    raf = requestAnimationFrame(tick);
  };
  new IntersectionObserver(([e]) => {
    if (e.isIntersecting && !raf) raf = requestAnimationFrame(tick);
    else if (!e.isIntersecting && raf) { cancelAnimationFrame(raf); raf = 0; }
  }).observe(el);
};

// Camera space: y up, z away from the viewer, turned by yaw and tipped by
// pitch so the top shows.
const rotation = (yaw, pitch) => {
  const cy = Math.cos(yaw), sy = Math.sin(yaw), cp = Math.cos(pitch), sp = Math.sin(pitch);
  return [[cy, 0, sy], [-sy * sp, cp, cy * sp], [-sy * cp, -sp, cy * cp]];
};

// Centres a crystal on its turning axis and sizes it so that, perspective
// included, it stays inside the drawing at any angle.
const fit = (spec) => {
  const lo = [Infinity, Infinity, Infinity], hi = [-Infinity, -Infinity, -Infinity];
  const all = spec.parts.flatMap((p) => p.faces.flatMap((f) => f.pts));
  for (const p of all) for (let k = 0; k < 3; k++) { lo[k] = Math.min(lo[k], p[k]); hi[k] = Math.max(hi[k], p[k]); }
  const mid = scale(add(lo, hi), 0.5);
  const reach = Math.max(...all.map((p) => Math.hypot(...sub(p, mid))));
  return { mid, reach, scale: (190 * FOCAL) / (reach * (FOCAL + 190)), floor: lo[1] - mid[1] };
};

// One program draws every face. Glass reflects a small studio, fixed to the
// camera, so as a crystal turns its faces sweep through the lights and flash.
// It is tinted toward clear, brighter where it catches the light, deeper
// toward the tips, and most reflective at grazing angles, as glass is.
// `pass` picks back faces (0) or front faces (1).
const VERT = `
attribute vec3 p; attribute vec3 n; attribute float h; attribute float d;
uniform mat3 rot; uniform vec3 mid; uniform float scale, focal;
varying vec3 vp, vn; varying float vh, vd, vy;
void main() {
  vec3 c = rot * (p - mid);
  vp = c; vn = rot * n; vh = h; vd = d; vy = p.y - mid.y;
  float s = focal / (focal + c.z * scale);
  gl_Position = vec4(c.xy * scale * s / 200.0, c.z / 4.0, 1.0);
}`;
const FRAG = `
precision mediump float;
varying vec3 vp, vn; varying float vh, vd, vy;
uniform vec3 light, eye, gem;
uniform float pass, pale, milk, glow, fadeLo, fadeHi;
// The studio, as seen along a reflected ray in camera space: a big softbox
// overhead and to the left, strip lights either side, a bright ceiling and a
// faint wall all round, so most turns catch something.
vec3 studio(vec3 r) {
  float box = pow(max(dot(r, normalize(vec3(-0.5, 0.65, -0.55))), 0.0), 8.0);
  float right = pow(max(dot(r, normalize(vec3(0.9, 0.1, -0.4))), 0.0), 30.0);
  float left = pow(max(dot(r, normalize(vec3(-0.95, -0.1, -0.3))), 0.0), 40.0);
  float ceiling = smoothstep(0.1, 0.8, r.y);
  float wall = smoothstep(-0.3, 0.2, r.y) * (1.0 - smoothstep(0.2, 0.7, r.y));
  return vec3(1.5 * box + 1.2 * right + 0.8 * left + 0.4 * ceiling + 0.12 * wall);
}
void main() {
  vec3 n = normalize(vn), v = normalize(eye - vp);
  float facing = dot(n, v);
  float fade = fadeHi > fadeLo ? smoothstep(fadeLo, fadeHi, vy) : 1.0;
  float lit = max(dot(n, light), 0.0);
  // A broad highlight from the key light and a tight glint from a second,
  // behind and to the right.
  float shine = pow(max(dot(n, normalize(light + v)), 0.0), 48.0)
    + 0.8 * pow(max(dot(n, normalize(normalize(vec3(0.7, 0.3, 0.6)) + v)), 0.0), 90.0);
  vec3 shown = studio(reflect(-v, n));
  float grazing = pow(1.0 - abs(facing), 3.0);
  if ((pass < 0.5) == (facing > 0.0)) discard;
  vec3 c; float a;
  // Glowing glass is pushed toward a deep electric blue and whitens only
  // where light catches it, so the body colour stays saturated.
  vec3 body = mix(gem, vec3(0.08, 0.25, 1.0), 0.45 * glow) * (1.0 + 0.15 * glow);
  if (facing > 0.0) {
    float mirror = (0.55 + 0.9 * grazing) * (1.0 - 0.45 * milk);
    float white = pale * (1.0 - 0.6 * vd) + (0.45 - 0.3 * glow) * pow(lit, 1.5) + 0.8 * shine
      + 0.15 * glow * vd + mirror * shown.r;
    c = mix(body, vec3(1.0), clamp(white, 0.0, 1.0));
    a = 0.22 + 0.34 * lit + 0.4 * shine + 0.35 * (1.0 - milk) * grazing + 0.12 * vd + 0.28 * milk + 0.15 * glow
      + 0.5 * mirror * shown.r;
  } else {
    c = body * 0.85;
    a = 0.1 + 0.08 * vd + 0.15 * milk + 0.1 * glow;
  }
  a = clamp(a, 0.0, 1.0) * vh * fade;
  gl_FragColor = vec4(c * a, a);
}`;

// Glass edges are soft quads rather than GL lines, so they can widen and
// blur. Each corner knows both ends of its edge; the shader projects them and
// pushes the corner out sideways in screen space. Edges farther from the
// viewer are wider, softer and fainter. `hidden` draws the edges that sit
// behind glass, found with the depth test: wide, blurred and faint.
const EDGE_VERT = `
attribute vec3 a, b, n; attribute float w, end, side;
uniform mat3 rot; uniform vec3 mid; uniform float scale, focal, reach, px, dpr, hidden;
varying float vSide, vFar, vW, vy;
vec4 project(vec3 p) {
  vec3 c = rot * (p - mid);
  float s = focal / (focal + c.z * scale);
  return vec4(c.xy * scale * s / 200.0, c.z / 4.0, 1.0);
}
void main() {
  vec4 A = project(a), B = project(b);
  vec3 here = end < 0.5 ? a : b;
  vec2 d = B.xy - A.xy;
  d = length(d) > 0.00001 ? normalize(d) : vec2(1.0, 0.0);
  vFar = clamp((rot * (here - mid)).z / (2.0 * reach) + 0.5, 0.0, 1.0);
  float width = mix(1.1, 2.6, vFar) * (hidden > 0.5 ? 2.8 : 1.0) * dpr;
  gl_Position = end < 0.5 ? A : B;
  gl_Position.xy += vec2(-d.y, d.x) * side * width / px;
  vSide = side; vW = w; vy = here.y - mid.y;
}`;
const EDGE_FRAG = `
precision mediump float;
varying float vSide, vFar, vW, vy;
uniform vec3 gem, ink;
uniform highp float hidden; // shared with the vertex shader, so same precision
uniform float lightEdges, fadeLo, fadeHi;
void main() {
  float x = abs(vSide);
  float soft = hidden > 0.5 ? exp(-x * x * 3.0) : 1.0 - smoothstep(0.65 - 0.35 * vFar, 1.0, x);
  float fade = fadeHi > fadeLo ? smoothstep(fadeLo, fadeHi, vy) : 1.0;
  float a = vW * (hidden > 0.5 ? 0.2 : 0.8) * mix(1.0, 0.35, vFar) * soft * fade;
  vec3 c = mix(gem, lightEdges > 0.5 ? vec3(1.0) : ink, lightEdges > 0.5 ? 0.55 : 0.45);
  gl_FragColor = vec4(c * a, a);
}`;

const link = (gl, vert, frag) => {
  const program = gl.createProgram();
  for (const [type, src] of [[gl.VERTEX_SHADER, vert], [gl.FRAGMENT_SHADER, frag]]) {
    const sh = gl.createShader(type);
    gl.shaderSource(sh, src);
    gl.compileShader(sh);
    if (!gl.getShaderParameter(sh, gl.COMPILE_STATUS)) console.error(gl.getShaderInfoLog(sh));
    gl.attachShader(program, sh);
  }
  gl.linkProgram(program);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) console.error(gl.getProgramInfoLog(program));
  return program;
};

const drawCrystal = (canvas, spec) => {
  const gl = canvas.getContext && canvas.getContext('webgl', { antialias: true, premultipliedAlpha: true });
  if (!gl) return;
  const faceProgram = link(gl, VERT, FRAG), edgeProgram = link(gl, EDGE_VERT, EDGE_FRAG);

  // Faces become triangle fans, each part's run of them remembered so glass
  // can draw part by part. Per vertex: position, normal, opacity and tint.
  // Edges become quads, six corners per edge.
  const { mid, reach, scale: S, floor } = fit(spec);
  const tris = [], quads = [], runs = [];
  for (const part of spec.parts) {
    const first = tris.length / 8;
    for (const f of part.faces) {
      const v = (i) => [...f.pts[i], ...f.n, part.alpha, f.tint[i]];
      for (let i = 1; i < f.pts.length - 1; i++) tris.push(...v(0), ...v(i), ...v(i + 1));
    }
    for (const l of part.lines) {
      for (const [end, side] of [[0, -1], [0, 1], [1, 1], [0, -1], [1, 1], [1, -1]]) {
        quads.push(...l.a, ...l.b, ...l.n, l.w * part.alpha, end, side);
      }
    }
    runs.push({ first, count: tris.length / 8 - first, centre: mean(part.faces.flatMap((f) => f.pts)) });
  }
  const upload = (data, stride) => {
    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(data), gl.STATIC_DRAW);
    return { buf, stride, count: data.length / stride };
  };
  const faceBuf = upload(tris, 8), quadBuf = upload(quads, 12);
  const LAYOUT = {
    8: [['p', 3], ['n', 3], ['h', 1], ['d', 1]],
    12: [['a', 3], ['b', 3], ['n', 3], ['w', 1], ['end', 1], ['side', 1]],
  };
  const bind = (program, { buf, stride }) => {
    gl.useProgram(program);
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    let offset = 0;
    for (const [name, size] of LAYOUT[stride]) {
      const loc = gl.getAttribLocation(program, name);
      if (loc >= 0) {
        gl.enableVertexAttribArray(loc);
        gl.vertexAttribPointer(loc, size, gl.FLOAT, false, stride * 4, offset * 4);
      }
      offset += size;
    }
  };
  const set = (program, values) => {
    gl.useProgram(program);
    for (const [name, value] of Object.entries(values)) {
      const loc = gl.getUniformLocation(program, name);
      if (loc === null) continue;
      if (Array.isArray(value)) (value.length === 9 ? gl.uniformMatrix3fv(loc, false, value) : gl.uniform3fv(loc, value));
      else gl.uniform1f(loc, value);
    }
  };
  const shared = {
    mid, scale: S, focal: FOCAL, reach,
    fadeLo: spec.fade ? floor : 0, fadeHi: spec.fade ? floor + spec.fade : 0,
  };
  set(faceProgram, {
    ...shared, light: LIGHT, eye: [0, 0, -FOCAL / S],
    pale: spec.pale || 0, milk: spec.milk || 0, glow: spec.glow || 0,
  });
  set(edgeProgram, shared);
  gl.enable(gl.BLEND);
  gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
  gl.enable(gl.DEPTH_TEST);

  animate(canvas, (yaw) => {
    // Keep the drawing buffer at the element's real pixel size, and follow
    // the theme: edges mix toward the page's ink, or glow on a dark page.
    const dpr = window.devicePixelRatio || 1;
    const px = Math.round(canvas.clientWidth * dpr);
    if (px && (canvas.width !== px || canvas.height !== px)) canvas.width = canvas.height = px;
    const style = getComputedStyle(canvas);
    const r = rotation(yaw, spec.pitch);
    const rot = [r[0][0], r[1][0], r[2][0], r[0][1], r[1][1], r[2][1], r[0][2], r[1][2], r[2][2]];
    const gem = rgb(style.getPropertyValue('--gem'));
    set(faceProgram, { rot, gem });
    set(edgeProgram, {
      rot, gem, ink: rgb(style.getPropertyValue('--ink')), px: canvas.width, dpr,
      lightEdges: spec.glow && style.getPropertyValue('--is-dark').trim() === '1' ? 1 : 0,
    });
    gl.viewport(0, 0, canvas.width, canvas.height);
    gl.clearColor(0, 0, 0, 0);
    gl.colorMask(true, true, true, true);
    gl.depthMask(true);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    gl.depthFunc(gl.LEQUAL);

    bind(faceProgram, faceBuf);
    const pass = (n) => gl.uniform1f(gl.getUniformLocation(faceProgram, 'pass'), n);
    // Farthest part first, back faces before front, writing no depth,
    // so glass never hides glass.
    gl.depthMask(false);
    const depth = (run) => dot(r[2], sub(run.centre, mid));
    for (const run of runs.slice().sort((a, b) => depth(b) - depth(a))) {
      for (const n of [0, 1]) {
        pass(n);
        gl.drawArrays(gl.TRIANGLES, run.first, run.count);
      }
    }
    // Then the nearest glass surface goes into the depth buffer alone, nudged
    // back so the edges lying on it count as in front.
    gl.colorMask(false, false, false, false);
    gl.depthMask(true);
    gl.enable(gl.POLYGON_OFFSET_FILL);
    gl.polygonOffset(2, 2);
    pass(1);
    gl.drawArrays(gl.TRIANGLES, 0, faceBuf.count);
    gl.disable(gl.POLYGON_OFFSET_FILL);
    gl.colorMask(true, true, true, true);
    gl.depthMask(false);
    // Edges in the open, then edges behind glass.
    bind(edgeProgram, quadBuf);
    for (const [hidden, test] of [[0, gl.LEQUAL], [1, gl.GREATER]]) {
      gl.uniform1f(gl.getUniformLocation(edgeProgram, 'hidden'), hidden);
      gl.depthFunc(test);
      gl.drawArrays(gl.TRIANGLES, 0, quadBuf.count);
    }
  });
};

document.querySelectorAll('.gem[data-crystal]').forEach((el) => {
  const spec = CRYSTALS[el.dataset.crystal];
  if (spec) drawCrystal(el, spec);
});
