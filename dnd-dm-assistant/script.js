// Updated Character Creation Data

const genders = [
    { name: "Male", description: "He/Him" },
    { name: "Female", description: "She/Her" }
];

const mythicalRaces = [
    {
        name: "Human",
        description: "Versatile and ambitious, humans are natural leaders who can excel at anything they put their minds to.",
        traits: "Extra skill, extra feat, versatile"
    },
    {
        name: "Elf", 
        description: "Graceful and long-lived, elves have keen senses and a natural affinity for magic and archery.",
        traits: "Darkvision, keen senses, magic resistance"
    },
    {
        name: "Sphinx",
        description: "Ancient and wise, with the body of a lion, wings of an eagle, and the face of a sage. You speak in riddles and see truth others miss.",
        traits: "Flight, ancient wisdom, riddle magic"
    },
    {
        name: "Manticore",
        description: "Fierce hunter with lion's strength, eagle's wings, and scorpion's deadly tail. You're a natural predator with honor.",
        traits: "Flight, venomous tail, predator instincts"
    },
    {
        name: "Dragonkin",
        description: "True dragon in humanoid form. Your scales shimmer, your breath is fire, and your presence commands respect.",
        traits: "Breath weapon, dragon scales, commanding presence"
    },
    {
        name: "Shapeshifter",
        description: "Master of adaptation who can take many forms. You understand people because you can become them.",
        traits: "Change shape, perfect mimicry, adaptive"
    },
    {
        name: "Naga",
        description: "Serpentine lower body with humanoid torso. Graceful, mystical, and deeply connected to ancient magic.",
        traits: "Serpent body, poison immunity, hypnotic gaze"
    },
    {
        name: "Four-Armed Warrior",
        description: "Powerful humanoid with four arms and incredible strength. You can fight multiple opponents simultaneously.",
        traits: "Four arms, extra attacks, incredible strength"
    },
    {
        name: "Phoenix-born",
        description: "Touched by phoenix fire, you have beautiful feathered wings and the power to rise from defeat.",
        traits: "Fire immunity, phoenix resurrection, inspiring presence"
    },
    {
        name: "Centaur",
        description: "Horse body with human torso. You're incredibly fast and have a deep connection to nature.",
        traits: "Incredible speed, nature bond, charge attacks"
    }
];

const roleBasedClasses = [
    // HEALERS & HELPERS
    {
        name: "Combat Medic",
        category: "Healers & Helpers",
        description: "You keep people alive in dangerous situations, thinking fast under pressure and never leaving anyone behind.",
        role: "Emergency healer, trauma specialist, battlefield support"
    },
    {
        name: "Grief Counselor", 
        category: "Healers & Helpers",
        description: "You help others process pain and find hope after loss. Your presence brings comfort to the hurting.",
        role: "Emotional healer, trauma counselor, hope bringer"
    },
    {
        name: "Community Healer",
        category: "Healers & Helpers", 
        description: "You bring people together and resolve conflicts peacefully. Communities are stronger because of you.",
        role: "Conflict resolver, unity builder, peace maker"
    },
    {
        name: "Spiritual Guide",
        category: "Healers & Helpers",
        description: "You help people find meaning, purpose, and inner strength. You light the way for lost souls.",
        role: "Purpose finder, spiritual mentor, wisdom keeper"
    },
    
    // PROTECTORS & WARRIORS
    {
        name: "Guardian",
        category: "Protectors & Warriors",
        description: "You put yourself between danger and those you protect. No threat gets past you to hurt others.",
        role: "Shield bearer, damage taker, protector"
    },
    {
        name: "Tactical Leader",
        category: "Protectors & Warriors",
        description: "You coordinate others and see the big picture in combat. Victory comes through smart strategy.",
        role: "Battle coordinator, strategic mind, team organizer"
    },
    {
        name: "Berserker",
        category: "Protectors & Warriors",
        description: "You channel raw emotion and power to overcome any obstacle. When others fall back, you charge forward.",
        role: "Unstoppable force, emotion channeler, breakthrough specialist"
    },
    {
        name: "Duelist",
        category: "Protectors & Warriors",
        description: "You're precise, skilled, and deadly in one-on-one fights. Your blade dances and your enemies fall.",
        role: "Precision fighter, single combat expert, elegant warrior"
    },
    
    // SPEAKERS & LEADERS
    {
        name: "Inspirational Speaker",
        category: "Speakers & Leaders",
        description: "Your words give people courage and hope. You can rally anyone to keep fighting when all seems lost.",
        role: "Morale booster, courage giver, rally specialist"
    },
    {
        name: "Negotiator",
        category: "Speakers & Leaders",
        description: "You solve problems through talking, not fighting. Even enemies become allies when you're done with them.",
        role: "Conflict resolver, deal maker, peace talker"
    },
    {
        name: "Storyteller",
        category: "Speakers & Leaders",
        description: "You preserve wisdom and teach through tales and songs. Your stories carry power and truth.",
        role: "Wisdom keeper, teacher, culture preserver"
    },
    {
        name: "Commander",
        category: "Speakers & Leaders",
        description: "People naturally look to you for leadership and direction. Orders feel like suggestions when you give them.",
        role: "Natural leader, decision maker, authority figure"
    },
    
    // SCOUTS & SPECIALISTS
    {
        name: "Tracker",
        category: "Scouts & Specialists",
        description: "You find what's lost and follow trails others can't see. Nothing stays hidden from you for long.",
        role: "Pathfinder, trail follower, search specialist"
    },
    {
        name: "Infiltrator",
        category: "Scouts & Specialists",
        description: "You get into places others can't reach. Walls, guards, and locks are just puzzles to solve.",
        role: "Stealth expert, access specialist, unseen mover"
    },
    {
        name: "Engineer",
        category: "Scouts & Specialists",
        description: "You build, fix, and solve practical problems. If it's broken, you can repair it. If it doesn't exist, you can make it.",
        role: "Builder, problem solver, creation specialist"
    },
    {
        name: "Investigator",
        category: "Scouts & Specialists",
        description: "You uncover truth and solve mysteries. Secrets reveal themselves to your careful observation.",
        role: "Truth finder, mystery solver, detail specialist"
    }
];

const backgrounds = [
    {
        name: "Folk Hero",
        description: "You came from humble origins but did something that made you a local legend.",
        skills: "Animal Handling, Survival, Smith's Tools"
    },
    {
        name: "Soldier",
        description: "You served in an army, learning discipline, tactics, and how to work as part of a team.",
        skills: "Athletics, Intimidation, Gaming Set"
    },
    {
        name: "Criminal",
        description: "You lived outside the law, but now you're trying to make a better life for yourself.",
        skills: "Deception, Stealth, Thieves' Tools"
    },
    {
        name: "Acolyte",
        description: "You served in a temple, learning about faith, healing, and helping others.",
        skills: "Insight, Religion, Herbalism Kit"
    },
    {
        name: "Merchant",
        description: "You know the value of things and how to make a deal. People and money make sense to you.",
        skills: "Insight, Persuasion, Navigator's Tools"
    },
    {
        name: "Hermit",
        description: "You lived in isolation, learning deep truths about yourself and the world.",
        skills: "Medicine, Religion, Herbalism Kit"
    },
    {
        name: "Entertainer",
        description: "You performed for crowds and know how to read people and capture attention.",
        skills: "Performance, Acrobatics, Disguise Kit"
    },
    {
        name: "Scholar",
        description: "You spent years studying, learning, and researching in libraries and schools.",
        skills: "Investigation, History, Calligrapher's Supplies"
    }
];

const alignments = [
    {
        name: "Lawful Good",
        description: "You believe in doing the right thing and following rules that protect people."
    },
    {
        name: "Neutral Good", 
        description: "You want to help people and do good, but you're flexible about how you do it."
    },
    {
        name: "Chaotic Good",
        description: "You fight for freedom and do what's right, even if it means breaking unjust rules."
    },
    {
        name: "Lawful Neutral",
        description: "You believe in order, tradition, and keeping your word above all else."
    },
    {
        name: "True Neutral",
        description: "You seek balance and try to see all sides of a situation before acting."
    },
    {
        name: "Chaotic Neutral",
        description: "You value your freedom above all else and follow your own path through life."
    }
];

// Character object to store selections
let character = {
    gender: null,
    race: null,
    class: null,
    background: null,
    stats: {},
    alignment: null,
    name: ""
};

// Utility functions
function rollD6() {
    return Math.floor(Math.random() * 6) + 1;
}

function rollStat() {
    let rolls = [rollD6(), rollD6(), rollD6(), rollD6()];
    rolls.sort((a, b) => b - a);
    return rolls[0] + rolls[1] + rolls[2];
}

function getModifier(score) {
    return Math.floor((score - 10) / 2);
}

function createOptionCard(option, type) {
    const card = document.createElement('div');
    card.className = 'option-card';
    card.onclick = () => selectOption(option, type, card);
    
    card.innerHTML = `
        <div class="option-title">${option.name}</div>
        <div class="option-description">${option.description}</div>
        ${option.traits ? `<div style="margin-top: 10px; font-style: italic; color: #667eea;">Traits: ${option.traits}</div>` : ''}
        ${option.role ? `<div style="margin-top: 10px; font-style: italic; color: #ff6b6b;">Role: ${option.role}</div>` : ''}
        ${option.skills ? `<div style="margin-top: 10px; font-style: italic; color: #28a745;">Skills: ${option.skills}</div>` : ''}
    `;
    
    return card;
}

function selectOption(option, type, cardElement) {
    const container = cardElement.parentElement;
    container.querySelectorAll('.option-card').forEach(card => {
        card.classList.remove('selected');
    });
    
    cardElement.classList.add('selected');
    character[type] = option;
}

function nextStep(stepNumber) {
    document.querySelectorAll('.step').forEach(step => {
        step.classList.add('hidden');
    });
    
    document.getElementById(`step${stepNumber}`).classList.remove('hidden');
    
    if (stepNumber === 1) initGenderSelection();
    if (stepNumber === 2) initRaceSelection();
    if (stepNumber === 3) initClassSelection();
    if (stepNumber === 4) initBackgroundSelection();
    if (stepNumber === 5) initStatsStep();
    if (stepNumber === 6) initAlignmentSelection();
    if (stepNumber === 7) showFinalCharacter();
}

function initGenderSelection() {
    const container = document.getElementById('genderOptions');
    container.innerHTML = '';
    genders.forEach(gender => {
        container.appendChild(createOptionCard(gender, 'gender'));
    });
}

function initRaceSelection() {
    const container = document.getElementById('raceOptions');
    container.innerHTML = '';
    mythicalRaces.forEach(race => {
        container.appendChild(createOptionCard(race, 'race'));
    });
}

function initClassSelection() {
    const container = document.getElementById('classOptions');
    container.innerHTML = '';
    
    const categories = [...new Set(roleBasedClasses.map(cls => cls.category))];
    
    categories.forEach(category => {
        const categoryHeader = document.createElement('h3');
        categoryHeader.textContent = category;
        categoryHeader.style.cssText = 'color: #667eea; margin: 20px 0 10px 0; grid-column: 1 / -1; text-align: center;';
        container.appendChild(categoryHeader);
        
        const categoryClasses = roleBasedClasses.filter(cls => cls.category === category);
        categoryClasses.forEach(cls => {
            container.appendChild(createOptionCard(cls, 'class'));
        });
    });
}

function initBackgroundSelection() {
    const container = document.getElementById('backgroundOptions');
    container.innerHTML = '';
    backgrounds.forEach(bg => {
        container.appendChild(createOptionCard(bg, 'background'));
    });
}

function initAlignmentSelection() {
    const container = document.getElementById('alignmentOptions');
    container.innerHTML = '';
    alignments.forEach(alignment => {
        container.appendChild(createOptionCard(alignment, 'alignment'));
    });
}

function initStatsStep() {
    // Just make sure the stats display is ready
    document.getElementById('statsDisplay').innerHTML = '';
    document.querySelector('#step5 .next-button').classList.add('hidden');
}

// Power Level Tiers
function getPowerLevel(totalStats) {
    if (totalStats >= 86) return { tier: "Legendary Hero", color: "#FFD700", description: "You are destined for greatness!" };
    if (totalStats >= 76) return { tier: "Elite Champion", color: "#FF6B6B", description: "You are among the greatest heroes!" };
    if (totalStats >= 66) return { tier: "Skilled Adventurer", color: "#667EEA", description: "You are a capable and reliable hero!" };
    return { tier: "Promising Hero", color: "#28A745", description: "You have great potential waiting to be unlocked!" };
}

// Class Evolution Data
const classEvolutions = {
    "Combat Medic": {
        threshold: { stat: "Wisdom", value: 15, alt: { stat: "Constitution", value: 15 } },
        evolved: "Battlefield Angel",
        description: "Your healing powers are legendary. You can bring people back from the brink of death and inspire hope in the darkest moments. Allies fight harder knowing you're watching over them."
    },
    "Grief Counselor": {
        threshold: { stat: "Wisdom", value: 16, alt: { stat: "Charisma", value: 15 } },
        evolved: "Soul Healer",
        description: "You don't just counsel - you actually heal emotional wounds with supernatural empathy. People leave you feeling truly whole again, their deepest pain transformed into strength."
    },
    "Community Healer": {
        threshold: { stat: "Charisma", value: 15, alt: { stat: "Wisdom", value: 15 } },
        evolved: "Unity Forger",
        description: "Your presence alone brings peace to warring factions. You can unite enemies and turn strangers into family with your incredible gift for harmony."
    },
    "Spiritual Guide": {
        threshold: { stat: "Wisdom", value: 16, alt: { stat: "Intelligence", value: 15 } },
        evolved: "Divine Oracle",
        description: "You see the threads of fate and destiny. Your wisdom transcends the mortal realm, and your guidance shapes the course of history itself."
    },
    "Guardian": {
        threshold: { stat: "Constitution", value: 16, alt: { stat: "Strength", value: 15 } },
        evolved: "Immortal Protector",
        description: "Nothing can break through your defense. You're an immovable object that enemies fear and allies trust absolutely. Legends will be told of your unbreakable shield."
    },
    "Tactical Leader": {
        threshold: { stat: "Intelligence", value: 15, alt: { stat: "Charisma", value: 15 } },
        evolved: "Master Strategist",
        description: "You see victory before the battle begins. Your tactical genius turns impossible odds into certain triumph. Armies follow your plans to legendary victories."
    },
    "Berserker": {
        threshold: { stat: "Strength", value: 16, alt: { stat: "Constitution", value: 16 } },
        evolved: "Unstoppable Force",
        description: "Your rage is the stuff of legends. When you charge, mountains move aside. Your fury is so pure and powerful that it becomes a force of nature itself."
    },
    "Duelist": {
        threshold: { stat: "Dexterity", value: 16, alt: { stat: "Charisma", value: 15 } },
        evolved: "Blade Master",
        description: "Your sword sings with deadly grace. You move like poetry in motion, and your blade finds its mark with supernatural precision. Opponents surrender rather than face you."
    },
    "Inspirational Speaker": {
        threshold: { stat: "Charisma", value: 16, alt: { stat: "Wisdom", value: 15 } },
        evolved: "Voice of Destiny",
        description: "Your words reshape reality itself. When you speak, hearts change, armies rally, and the impossible becomes inevitable. Your voice carries the power of hope incarnate."
    },
    "Negotiator": {
        threshold: { stat: "Charisma", value: 15, alt: { stat: "Intelligence", value: 15 } },
        evolved: "Peacemaker Supreme",
        description: "Wars end when you enter the room. Your diplomatic genius can turn the bitterest enemies into trusted allies. Peace follows in your wake like a blessing."
    },
    "Storyteller": {
        threshold: { stat: "Charisma", value: 15, alt: { stat: "Intelligence", value: 16 } },
        evolved: "Mythweaver",
        description: "Your stories become reality. When you speak of heroes, heroes rise. Your tales have the power to inspire legends and reshape the world through narrative magic."
    },
    "Commander": {
        threshold: { stat: "Charisma", value: 16, alt: { stat: "Intelligence", value: 15 } },
        evolved: "Legendary General",
        description: "Armies would follow you into the depths of hell itself. Your leadership inspires such loyalty that your name becomes a battle cry that echoes through generations."
    },
    "Tracker": {
        threshold: { stat: "Wisdom", value: 15, alt: { stat: "Dexterity", value: 16 } },
        evolved: "Legendary Scout",
        description: "You can track anything across any terrain, through time itself if needed. You see signs others miss and find paths that exist only for you."
    },
    "Infiltrator": {
        threshold: { stat: "Dexterity", value: 16, alt: { stat: "Intelligence", value: 15 } },
        evolved: "Shadow Walker",
        description: "You move between worlds unseen. Locks open for you, guards never notice you, and you can steal anything - including secrets from people's dreams."
    },
    "Engineer": {
        threshold: { stat: "Intelligence", value: 16, alt: { stat: "Dexterity", value: 15 } },
        evolved: "Master Creator",
        description: "You don't just build things - you create wonders. Your inventions seem like magic to others, bending reality to your brilliant designs."
    },
    "Investigator": {
        threshold: { stat: "Intelligence", value: 15, alt: { stat: "Wisdom", value: 16 } },
        evolved: "Truth Seeker",
        description: "No mystery can hide from you. You uncover truths that reshape kingdoms and solve puzzles that have confounded ages. Reality reveals its secrets to your keen mind."
    }
};

// Add this function to calculate percentiles
function calculatePercentile(totalStats) {
    // Theoretical range: 18 (all 3s) to 108 (all 18s)
    // Practical range with 4d6 drop lowest: ~36 (all 6s) to 108 (all 18s)
    // Most common range: 50-90
    
    const minPossible = 36; // Six stats of 6 each
    const maxPossible = 108; // Six stats of 18 each
    const range = maxPossible - minPossible;
    
    // Calculate raw percentile
    const rawPercentile = ((totalStats - minPossible) / range) * 100;
    
    // Clamp between 1 and 99 (nobody gets exactly 0% or 100%)
    const percentile = Math.max(1, Math.min(99, Math.round(rawPercentile)));
    
    return percentile;
}

// Add this function for percentile description
function getPercentileDescription(percentile) {
    if (percentile >= 95) return "You're in the top 5% of all heroes - absolutely legendary!";
    if (percentile >= 90) return "You're in the top 10% - truly exceptional!";
    if (percentile >= 80) return "You're in the top 20% - well above average!";
    if (percentile >= 70) return "You're better than 7 out of 10 heroes!";
    if (percentile >= 60) return "You're above average - solid hero material!";
    if (percentile >= 50) return "You're right in the middle - perfectly capable!";
    if (percentile >= 40) return "You're below average but still heroic!";
    if (percentile >= 30) return "You're in the bottom third, but heroes come in all forms!";
    if (percentile >= 20) return "You're in the bottom 20%, but determination matters more than raw stats!";
    if (percentile >= 10) return "You're in the bottom 10%, but the greatest heroes often start humble!";
    return "You're in the bottom 5% - the perfect underdog hero story!";
}

function rollStats() {
    const statNames = ['Strength', 'Dexterity', 'Constitution', 'Intelligence', 'Wisdom', 'Charisma'];
    const container = document.getElementById('statsDisplay');
    container.innerHTML = '';
    
    let totalStats = 0;
    
    statNames.forEach(statName => {
        const value = rollStat();
        const modifier = getModifier(value);
        character.stats[statName] = value;
        totalStats += value;
        
        const statBox = document.createElement('div');
        statBox.className = 'stat-box';
        statBox.innerHTML = `
            <div class="stat-name">${statName}</div>
            <div class="stat-value">${value}</div>
            <div class="stat-modifier">${modifier >= 0 ? '+' : ''}${modifier}</div>
        `;
        container.appendChild(statBox);
    });
    
    // Calculate percentile
    const percentile = calculatePercentile(totalStats);
    const percentileDesc = getPercentileDescription(percentile);
    const powerLevel = getPowerLevel(totalStats);
    
    // Add power level display with percentile
    const powerDisplay = document.createElement('div');
    powerDisplay.className = 'power-level';
    powerDisplay.style.cssText = `
        grid-column: 1 / -1; 
        text-align: center; 
        margin-top: 20px; 
        padding: 20px; 
        background: ${powerLevel.color}; 
        color: white; 
        border-radius: 15px; 
        font-weight: bold;
        font-size: 1.2rem;
    `;
    powerDisplay.innerHTML = `
        <div style="font-size: 1.5rem; margin-bottom: 5px;">🌟 ${powerLevel.tier} 🌟</div>
        <div>Total Power: ${totalStats} (${percentile}th percentile)</div>
        <div style="font-size: 1rem; margin-top: 5px;">${percentileDesc}</div>
        <div style="font-size: 0.9rem; margin-top: 10px; opacity: 0.9;">
            📊 Range: 36 (lowest possible) to 108 (perfect rolls)
        </div>
    `;
    container.appendChild(powerDisplay);
    
    document.querySelector('#step5 .next-button').classList.remove('hidden');
}

// Check for evolution
function checkEvolution(character) {
    if (!character.class) return null;
    
    const evolution = classEvolutions[character.class.name];
    if (!evolution) return null;
    
    const primaryStat = character.stats[evolution.threshold.stat];
    const altStat = character.stats[evolution.threshold.alt?.stat];
    
    if (primaryStat >= evolution.threshold.value || 
        (evolution.threshold.alt && altStat >= evolution.threshold.alt.value)) {
        return evolution;
    }
    
    return null;
}

// Midjourney Prompt Generator
function generateMidjourneyPrompt(character) {
    if (!character.race || !character.class || !character.gender) return "";
    
    // Physical descriptions for each race
    const raceDescriptions = {
        "Human": "a noble human",
        "Elf": "a graceful elf with pointed ears and ethereal beauty",
        "Sphinx": "a majestic sphinx with the body of a lion, eagle wings, and wise human face",
        "Manticore": "a fierce manticore with lion's body, scorpion tail, and eagle wings",
        "Dragonkin": "a powerful dragonkin with shimmering scales and draconic features",
        "Shapeshifter": "a mysterious shapeshifter with shifting, fluid features",
        "Naga": "an elegant naga with serpentine lower body and humanoid torso",
        "Four-Armed Warrior": "a mighty four-armed warrior with incredible physique",
        "Phoenix-born": "a radiant phoenix-born with feathered wings and fiery aura",
        "Centaur": "a noble centaur with horse body and human torso"
    };
    
    // Visual elements for evolved/regular classes
    const classVisuals = {
        // Evolved versions
        "Battlefield Angel": "surrounded by divine healing light, tending to wounded allies",
        "Soul Healer": "emanating warm, comforting aura that mends broken hearts",
        "Unity Forger": "bringing peace to warring factions with outstretched hands",
        "Divine Oracle": "eyes glowing with ancient wisdom, seeing through time",
        "Immortal Protector": "standing like an unbreakable wall, shield raised protectively",
        "Master Strategist": "commanding from atop a hill, tactical maps floating around them",
        "Unstoppable Force": "mid-charge with unstoppable fury, earth cracking beneath feet",
        "Blade Master": "dancing with perfect sword technique, blade trailing light",
        "Voice of Destiny": "speaking to a captivated crowd, words visible as golden energy",
        "Peacemaker Supreme": "mediating between enemies who now shake hands",
        "Mythweaver": "telling stories that come alive as magical images around them",
        "Legendary General": "leading an army with inspiring presence and banner raised",
        "Legendary Scout": "tracking through impossible terrain with supernatural awareness",
        "Shadow Walker": "moving unseen through shadows, partially translucent",
        "Master Creator": "surrounded by incredible inventions and magical contraptions",
        "Truth Seeker": "uncovering hidden secrets, magnifying glass revealing mysteries",
        
        // Regular versions
        "Combat Medic": "healing wounded in battle, medical supplies glowing with magic",
        "Grief Counselor": "comforting someone in distress with gentle, caring presence",
        "Community Healer": "bringing people together in a circle of unity",
        "Spiritual Guide": "meditating with spiritual energy flowing around them",
        "Guardian": "standing protectively with shield and determined expression",
        "Tactical Leader": "pointing at battle plans, coordinating team movements",
        "Berserker": "in wild fury, weapons raised, eyes blazing with rage",
        "Duelist": "in elegant sword stance, focused and precise",
        "Inspirational Speaker": "addressing a crowd with passionate, uplifting gestures",
        "Negotiator": "at a peace table, bringing opposing sides together",
        "Storyteller": "enchanting listeners around a campfire with animated tales",
        "Commander": "leading from the front, inspiring followers behind them",
        "Tracker": "reading signs in the wilderness, eyes scanning the horizon",
        "Infiltrator": "sneaking through shadows, tools for stealth in hand",
        "Engineer": "building or repairing complex machinery with focused expertise",
        "Investigator": "examining clues with intense concentration and detective tools"
    };
    
    // Background influences
    const backgroundElements = {
        "Folk Hero": "in a rustic village setting",
        "Soldier": "with military bearing and disciplined posture",
        "Criminal": "with a roguish smile and street-smart confidence",
        "Acolyte": "with religious symbols and holy demeanor",
        "Merchant": "with fine clothes and calculating gaze",
        "Hermit": "with simple robes and deep, thoughtful eyes",
        "Entertainer": "with dramatic flair and captivating presence",
        "Scholar": "with books and scrolls, intellectual appearance"
    };
    
    // Alignment personality traits
    const alignmentTraits = {
        "Lawful Good": "radiating righteousness and noble purpose",
        "Neutral Good": "with kind eyes and helpful demeanor",
        "Chaotic Good": "with rebellious spirit and freedom-loving attitude",
        "Lawful Neutral": "with orderly appearance and steady composure",
        "True Neutral": "with balanced, contemplative expression",
        "Chaotic Neutral": "with unpredictable energy and free spirit"
    };
    
    // Power level visual enhancements
    const powerVisuals = {
        "Legendary Hero": "epic legendary aura, reality bending around them",
        "Elite Champion": "powerful heroic presence, energy crackling around them",
        "Skilled Adventurer": "confident adventurer's stance, well-equipped",
        "Promising Hero": "determined rookie hero, potential visible in their eyes"
    };
    
    // Build the prompt
    const totalStats = Object.values(character.stats).reduce((sum, stat) => sum + stat, 0);
    const powerLevel = getPowerLevel(totalStats);
    const evolution = checkEvolution(character);
    const finalClass = evolution ? evolution.evolved : character.class.name;
    
    const raceDesc = raceDescriptions[character.race.name] || character.race.name;
    const classVisual = classVisuals[finalClass] || `as a ${finalClass}`;
    const backgroundElement = backgroundElements[character.background?.name] || "";
    const alignmentTrait = alignmentTraits[character.alignment?.name] || "";
    const powerVisual = powerVisuals[powerLevel.tier] || "";
    
    const prompt = `${raceDesc} ${finalClass}, ${character.gender.name.toLowerCase()}, ${classVisual}, ${backgroundElement}, ${alignmentTrait}, ${powerVisual}, fantasy art style, heroic pose, dramatic lighting, highly detailed, professional artwork, stunning composition`;
    
    return prompt;
}

function showFinalCharacter() {
    const container = document.getElementById('characterSheet');
    const pronouns = character.gender?.description || 'They/Them';
    const evolution = checkEvolution(character);
    
    const totalStats = Object.values(character.stats).reduce((sum, stat) => sum + stat, 0);
    const powerLevel = getPowerLevel(totalStats);
    const percentile = calculatePercentile(totalStats);
    const percentileDesc = getPercentileDescription(percentile);
    const midjourneyPrompt = generateMidjourneyPrompt(character);
    
    container.innerHTML = `
        <h3>Character Summary</h3>
        <div class="character-detail"><strong>Gender:</strong> ${character.gender?.name || 'Not selected'} (${pronouns})</div>
        <div class="character-detail"><strong>Race:</strong> ${character.race?.name || 'Not selected'}</div>
        <div class="character-detail"><strong>Role:</strong> ${evolution ? evolution.evolved : character.class?.name || 'Not selected'} ${evolution ? '⭐ EVOLVED!' : ''}</div>
        <div class="character-detail"><strong>Background:</strong> ${character.background?.name || 'Not selected'}</div>
        <div class="character-detail"><strong>Alignment:</strong> ${character.alignment?.name || 'Not selected'}</div>
        <div class="character-detail"><strong>Power Level:</strong> <span style="color: ${powerLevel.color}; font-weight: bold;">${powerLevel.tier}</span> (${totalStats} total - ${percentile}th percentile)</div>
        
        <h3>Ability Scores</h3>
        ${Object.entries(character.stats).map(([stat, value]) => 
            `<div class="character-detail"><strong>${stat}:</strong> ${value} (${getModifier(value) >= 0 ? '+' : ''}${getModifier(value)})</div>`
        ).join('')}
        
        <div style="background: #f8f9fa; padding: 15px; border-radius: 10px; margin: 15px 0; border-left: 4px solid ${powerLevel.color};">
            <strong>📊 Your Statistical Ranking:</strong> ${percentileDesc}
        </div>
        
        <h3>Character Concept</h3>
        <div class="character-detail">
            You are a <strong>${character.race?.name}</strong> <strong>${evolution ? evolution.evolved : character.class?.name}</strong> 
            with a background as a <strong>${character.background?.name}</strong>. 
            ${character.race?.description} 
            ${evolution ? evolution.description : character.class?.description}
        </div>
        
        ${evolution ? `
        <div style="background: linear-gradient(135deg, #FFD700, #FFA500); padding: 20px; border-radius: 15px; margin-top: 20px; text-align: center;">
            <h3 style="color: #8B4513; margin-bottom: 10px;">🌟 EVOLUTION ACHIEVED! 🌟</h3>
            <div style="color: #8B4513; font-weight: bold;">Your exceptional abilities have unlocked your true potential!</div>
        </div>
        ` : ''}
        
        <div style="background: linear-gradient(135deg, #667eea, #764ba2); padding: 20px; border-radius: 15px; margin-top: 20px;">
            <h3 style="color: white; margin-bottom: 15px;">🎨 AI Art Prompt</h3>
            <div style="background: rgba(255,255,255,0.1); padding: 15px; border-radius: 10px; margin-bottom: 15px;">
                <textarea id="midjourneyPrompt" readonly style="width: 100%; height: 100px; background: transparent; border: none; color: white; font-size: 14px; resize: none; outline: none;">${midjourneyPrompt}</textarea>
            </div>
            <button onclick="copyPrompt()" style="background: #ff6b6b; color: white; border: none; padding: 10px 20px; border-radius: 25px; cursor: pointer; font-weight: bold;">
                📋 Copy Prompt for Midjourney
            </button>
            <div style="color: rgba(255,255,255,0.8); font-size: 12px; margin-top: 10px;">
                Copy this prompt and paste it into Midjourney to generate your character's portrait!
            </div>
        </div>
    `;
}

// Function to copy the Midjourney prompt
function copyPrompt() {
    const textarea = document.getElementById('midjourneyPrompt');
    textarea.select();
    textarea.setSelectionRange(0, 99999); // For mobile devices
    
    try {
        document.execCommand('copy');
        const button = event.target;
        const originalText = button.textContent;
        button.textContent = '✅ Copied!';
        button.style.background = '#28a745';
        
        setTimeout(() => {
            button.textContent = originalText;
            button.style.background = '#ff6b6b';
        }, 2000);
    } catch (err) {
        console.error('Failed to copy text: ', err);
    }
}

// AI-powered character backstory generation
async function generateBackstory() {
    if (!character.race || !character.class || !character.background) {
        alert('Please complete character creation first!');
        return;
    }

    const button = event.target;
    const originalText = button.textContent;
    button.textContent = '🤖 Generating...';
    button.disabled = true;

    try {
        const evolution = checkEvolution(character);
        const finalClass = evolution ? evolution.evolved : character.class.name;
        
        const prompt = `Create a compelling backstory for this D&D character:
        
Race: ${character.race.name}
Class: ${finalClass}
Background: ${character.background.name}
Alignment: ${character.alignment?.name || 'Neutral'}
Gender: ${character.gender.name}

Key stats: ${Object.entries(character.stats).map(([stat, value]) => `${stat}: ${value}`).join(', ')}

Write a 2-3 paragraph backstory that:
- Explains how they became a ${finalClass}
- Incorporates their ${character.background.name} background meaningfully
- Reflects their ${character.alignment?.name || 'Neutral'} alignment
- Mentions specific events that shaped them
- Gives them clear motivations and goals
- Makes them feel like a real person with flaws and strengths

Keep it engaging and suitable for a fantasy RPG campaign.`;

        const response = await fetch('/.netlify/functions/claude', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ prompt })
        });

        const data = await response.json();
        
        if (data.content && data.content[0] && data.content[0].text) {
            displayBackstory(data.content[0].text);
        } else {
            throw new Error('Invalid response format');
        }
        
    } catch (error) {
        console.error('Error generating backstory:', error);
        alert('Failed to generate backstory. Please try again.');
    } finally {
        button.textContent = originalText;
        button.disabled = false;
    }
}

function displayBackstory(backstory) {
    const container = document.getElementById('characterSheet');
    
    // Remove existing backstory if present
    const existingBackstory = container.querySelector('.ai-backstory');
    if (existingBackstory) {
        existingBackstory.remove();
    }
    
    // Create backstory element
    const backstoryElement = document.createElement('div');
    backstoryElement.className = 'ai-backstory';
    backstoryElement.style.cssText = `
        background: linear-gradient(135deg, #28a745, #20c997);
        padding: 20px;
        border-radius: 15px;
        margin-top: 20px;
        color: white;
    `;
    
    backstoryElement.innerHTML = `
        <h3 style="color: white; margin-bottom: 15px;">🤖 AI-Generated Backstory</h3>
        <div style="line-height: 1.6; white-space: pre-wrap;">${backstory}</div>
        <button onclick="generateBackstory()" style="background: rgba(255,255,255,0.2); color: white; border: none; padding: 8px 16px; border-radius: 20px; margin-top: 15px; cursor: pointer;">
            🔄 Generate New Backstory
        </button>
    `;
    
    // Insert before the AI art prompt section
    const artSection = container.querySelector('div[style*="linear-gradient(135deg, #667eea, #764ba2)"]');
    if (artSection) {
        container.insertBefore(backstoryElement, artSection);
    } else {
        container.appendChild(backstoryElement);
    }
}

const heroicNames = [
    "Aeliana", "Theron", "Lyra", "Gareth", "Seraphina", "Darius", "Ember", "Kael", 
    "Luna", "Orion", "Vera", "Atlas", "Iris", "Phoenix", "Nova", "Zephyr",
    "Aria", "Magnus", "Celeste", "Draven", "Aurora", "Titan", "Raven", "Storm"
];

function generateName() {
    const randomName = heroicNames[Math.floor(Math.random() * heroicNames.length)];
    character.name = randomName;
    
    const nameDisplay = document.createElement('div');
    nameDisplay.className = 'character-detail character-name';
    nameDisplay.innerHTML = `<strong>Name:</strong> ${randomName}`;
    
    const container = document.getElementById('characterSheet');
    const existingName = container.querySelector('.character-name');
    if (existingName) {
        existingName.remove();
    }
    
    container.insertBefore(nameDisplay, container.firstChild);
}

function startOver() {
    character = { gender: null, race: null, class: null, background: null, stats: {}, alignment: null, name: "" };
    nextStep(1);
}

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
    initGenderSelection();
});