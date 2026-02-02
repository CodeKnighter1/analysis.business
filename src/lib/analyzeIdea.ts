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
            points = ['Clear, frequent pain point identified', 'Customer actively suffers from this problem'];
        } else if (score === 'weak') {
            points = ['Pain is not clearly articulated', 'May be a "nice to have" rather than essential'];
        } else {
            points = ['Pain exists but frequency unclear', 'Need more customer evidence'];
        }
    } else if (lensName === 'Urgency') {
        if (score === 'strong') {
            points = ['Time-sensitive problem', 'Clear consequences for inaction'];
        } else if (score === 'weak') {
            points = ['No compelling reason to act now', 'Customer can delay indefinitely'];
        } else {
            points = ['Some urgency exists', 'Triggering events unclear'];
        }
    } else {
        if (score === 'strong') {
            points = ['Clear willingness to pay', 'Identifiable budget exists'];
        } else if (score === 'weak') {
            points = ['No clear monetization path', 'Customers expect free solutions'];
        } else {
            points = ['Potential for payment exists', 'Business model needs validation'];
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
        Pain: 'Real problem that causes measurable suffering.',
        Urgency: 'Time-sensitive trigger that forces action.',
        Money: 'Clear path to customer wallet.',
    };

    const weakestMessages = {
        Pain: 'Problem exists but is tolerable. Customers live with it.',
        Urgency: 'No deadline. No burning platform. Easy to ignore.',
        Money: 'Payment path unclear. Who pays and why?',
    };

    return {
        strongest: strongestMessages[strongest.name as keyof typeof strongestMessages],
        weakest: weakestMessages[weakest.name as keyof typeof weakestMessages],
    };
}

function generateRealityCheck(verdict: Verdict, pain: LensAnalysis, urgency: LensAnalysis, money: LensAnalysis): string {
    if (verdict === 'KILL') {
        if (money.score === 'weak') {
            return 'Ideas that feel good but don\'t make money are hobbies, not businesses.';
        }
        if (pain.score === 'weak') {
            return 'You\'re more excited about this than your customers ever will be.';
        }
        return 'Without urgency, your biggest competitor is "do nothing."';
    }

    if (verdict === 'PIVOT') {
        if (money.score === 'unclear') {
            return 'You have a problem worth solving, but no clear buyer. Find the budget.';
        }
        if (urgency.score === 'weak') {
            return 'Good idea, but "nice to have" never wins sales cycles.';
        }
        return 'There\'s something here, but you\'re solving a symptom, not the root cause.';
    }

    return 'Strong signals, but execution will still be harder than you think.';
}

function generateNextStep(verdict: Verdict, urgency: LensAnalysis, money: LensAnalysis): string {
    if (verdict === 'KILL') {
        return 'Talk to 5 potential customers this week. Ask: "How are you solving this today?" If they shrug, move on.';
    }

    if (verdict === 'PIVOT') {
        if (money.score !== 'strong') {
            return 'Find 3 people in your target market. Ask what they currently pay for related solutions.';
        }
        if (urgency.score !== 'strong') {
            return 'Identify the triggering event that would make someone need this RIGHT NOW.';
        }
        return 'Narrow your target. Who experiences this pain most intensely?';
    }

    return 'Build the smallest thing that delivers value. Get 1 paying customer in 7 days.';
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
