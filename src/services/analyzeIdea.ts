import type { IdeaAnalysis, LensAnalysis, Verdict } from '@/types/analysis';

// Pain indicators
const painKeywords = {
    strong: ['daily', 'every day', 'constantly', 'always', 'waste', 'lose', 'cost', 'expensive', 'hours', 'frustrated', 'hate', 'broken', 'failing', 'desperate'],
    weak: ['sometimes', 'occasionally', 'might', 'could', 'nice to have', 'convenient', 'easier'],
};

// Urgency indicators
const urgencyKeywords = {
    strong: ['now', 'immediately', 'deadline', 'urgent', 'breaking', 'crisis', 'compliance', 'legal', 'penalty', 'losing', 'emergency'],
    weak: ['eventually', 'someday', 'future', 'later', 'when', 'if'],
};

// Money indicators
const moneyKeywords = {
    strong: ['pay', 'budget', 'invest', 'already paying', 'subscription', 'enterprise', 'b2b', 'business', 'company', 'revenue', 'profit'],
    weak: ['free', 'cheap', 'consumer', 'everyone', 'mass market', 'viral'],
};

function countKeywords(text: string, keywords: string[]): number {
    const lowerText = text.toLowerCase();
    return keywords.filter(keyword => lowerText.includes(keyword.toLowerCase())).length;
}

function analyzeLens(text: string, strong: string[], weak: string[], lensName: string): LensAnalysis {
    const strongCount = countKeywords(text, strong);
    const weakCount = countKeywords(text, weak);

    let score: 'strong' | 'weak' | 'unclear';
    let points: string[] = [];

    if (strongCount >= 2) {
        score = 'strong';
    } else if (weakCount >= 2 || strongCount === 0) {
        score = 'weak';
    } else {
        score = 'unclear';
    }

    // Generate analysis points based on lens
    if (lensName === 'Pain') {
        if (score === 'strong') {
            points = ['Aniq, tez-tez uchraydigan muammo aniqlandi', 'Mijoz bu muammodan faol azob chekmoqda'];
        } else if (score === 'weak') {
            points = ['Muammo aniq ifodalanmagan', '"Yaxshi bo\'lardi" darajasida, zaruriy emas'];
        } else {
            points = ['Muammo mavjud, lekin chastotasi noaniq', 'Qo\'shimcha mijoz dalillari kerak'];
        }
    } else if (lensName === 'Urgency') {
        if (score === 'strong') {
            points = ['Vaqtga bog\'liq muammo', 'Harakat qilmaslik oqibatlari aniq'];
        } else if (score === 'weak') {
            points = ['Hozir harakat qilish uchun majburlovchi sabab yo\'q', 'Mijoz cheksiz kechiktirishi mumkin'];
        } else {
            points: ['Shoshilinchlik mavjud', 'Tetiklovchi hodisalar noaniq'];
        }
    } else {
        if (score === 'strong') {
            points = ['To\'lashga aniq tayorlik', 'Aniqlanadigan byudjet mavjud'];
        } else if (score === 'weak') {
            points = ['Aniq monetizatsiya yo\'li yo\'q', 'Mijozlar bepul yechimlarni kutishadi'];
        } else {
            points = ['To\'lov imkoniyati mavjud', 'Biznes model tasdiqlanishi kerak'];
        }
    }

    return { title: lensName, score, points };
}

function determineVerdict(pain: LensAnalysis, urgency: LensAnalysis, money: LensAnalysis): Verdict {
    const scores = [pain.score, urgency.score, money.score];
    const strongCount = scores.filter(s => s === 'strong').length;
    const weakCount = scores.filter(s => s === 'weak').length;

    if (strongCount >= 2 && weakCount === 0) return 'GO';
    if (weakCount >= 2) return 'KILL';
    return 'PIVOT';
}

function calculateScore(pain: LensAnalysis, urgency: LensAnalysis, money: LensAnalysis): number {
    const scoreMap = { strong: 3, unclear: 2, weak: 1 };
    const total = scoreMap[pain.score] + scoreMap[urgency.score] + scoreMap[money.score];
    return Math.round((total / 9) * 10);
}

function generateSignals(pain: LensAnalysis, urgency: LensAnalysis, money: LensAnalysis): { strongest: string; weakest: string } {
    const lenses = [
        { lens: pain, name: 'Pain' },
        { lens: urgency, name: 'Urgency' },
        { lens: money, name: 'Money' },
    ];

    const sorted = [...lenses].sort((a, b) => {
        const scoreOrder = { strong: 3, unclear: 2, weak: 1 };
        return scoreOrder[b.lens.score] - scoreOrder[a.lens.score];
    });

    const strongest = sorted[0];
    const weakest = sorted[sorted.length - 1];

    const strongestMessages = {
        Pain: 'Haqiqiy muammo, o\'lchanadigan azob keltiradi.',
        Urgency: 'Vaqtga bog\'liq tetiklovchi, harakatga majbur qiladi.',
        Money: 'Mijoz hamyoniga aniq yo\'l.',
    };

    const weakestMessages = {
        Pain: 'Muammo mavjud, lekin toqat qilinadigan. Mijozlar u bilan yashaydilar.',
        Urgency: 'Muddat yo\'q. Yonayotgan platforma yo\'q. E\'tiborsiz qoldirish oson.',
        Money: 'To\'lov yo\'li noaniq. Kim va nima uchun to\'laydi?',
    };

    return {
        strongest: strongestMessages[strongest.name as keyof typeof strongestMessages],
        weakest: weakestMessages[weakest.name as keyof typeof weakestMessages],
    };
}

function generateRealityCheck(verdict: Verdict, pain: LensAnalysis, urgency: LensAnalysis, money: LensAnalysis): string {
    if (verdict === 'KILL') {
        if (money.score === 'weak') {
            return 'Yaxshi his qiladigan, lekin pul keltirmaydigan g\'oyalar - bu biznes emas, sevimli mashg\'ulot.';
        }
        if (pain.score === 'weak') {
            return 'Siz bu g\'oyadan mijozlaringizdan ko\'ra ko\'proq hayajondamisiz.';
        }
        return 'Shoshilinchlik bo\'lmasa, eng katta raqibingiz - "hech narsa qilmaslik".';
    }

    if (verdict === 'PIVOT') {
        if (money.score === 'unclear') {
            return 'Sizda hal qilishga arziydigan muammo bor, lekin aniq xaridor yo\'q. Byudjetni toping.';
        }
        if (urgency.score === 'weak') {
            return 'Yaxshi g\'oya, lekin "yaxshi bo\'lardi" hech qachon savdo tsikllarida g\'alaba qozonmaydi.';
        }
        return 'Bu yerda nimadir bor, lekin siz simptomni hal qilyapsiz, ildiz sababini emas.';
    }

    return 'Kuchli signallar, lekin bajarilish hali ham o\'ylaganingizdan qiyinroq bo\'ladi.';
}

function generateNextStep(verdict: Verdict, urgency: LensAnalysis, money: LensAnalysis): string {
    if (verdict === 'KILL') {
        return 'Bu hafta 5 ta potentsial mijoz bilan gaplashing. So\'rang: "Bugungi kunda buni qanday hal qilyapsiz?" Agar ular yelka qisishsa, oldinga o\'ting.';
    }

    if (verdict === 'PIVOT') {
        if (money.score !== 'strong') {
            return 'Maqsadli bozoringizda 3 kishini toping. Shunga o\'xshash yechimlar uchun hozir nima to\'lashlarini so\'rang.';
        }
        if (urgency.score !== 'strong') {
            return 'Kimnidir bunga HOZIR muhtoj qiladigan tetiklovchi hodisani aniqlang.';
        }
        return 'Maqsadingizni toraytiring. Bu og\'riqni eng kuchli kim his qiladi?';
    }

    return 'Qiymat etkazadigan eng kichik narsani yarating. 7 kun ichida 1 ta to\'lovchi mijozni qo\'lga kiriting.';
}

export function analyzeIdea(idea: string): IdeaAnalysis {
    const pain = analyzeLens(idea, painKeywords.strong, painKeywords.weak, 'Pain');
    const urgency = analyzeLens(idea, urgencyKeywords.strong, urgencyKeywords.weak, 'Urgency');
    const money = analyzeLens(idea, moneyKeywords.strong, moneyKeywords.weak, 'Money');

    const verdict = determineVerdict(pain, urgency, money);
    const score = calculateScore(pain, urgency, money);
    const signals = generateSignals(pain, urgency, money);

    return {
        score,
        pain,
        urgency,
        money,
        strongestSignal: signals.strongest,
        weakestSignal: signals.weakest,
        realityCheck: generateRealityCheck(verdict, pain, urgency, money),
        verdict,
        nextStep: generateNextStep(verdict, urgency, money),
    };
}