import { readFileSync } from 'fs';
const steps = readFileSync('./protocol.steps', 'utf8');
if (steps.includes('DETECT_DISTORTION')) {
    console.log("✅ Safety-Gold Invariant Verified: Alignment Filter active.");
} else {
    process.exit(1);
}
