import { latestInsights } from '@/lib/data';
import './article.css';

export function HowCrmPipelinesWorkArticle() {
  const post = latestInsights.find(p => p.slug === 'how-crm-pipelines-work');

  if (!post) return null;

  return (
    <article id="how-crm-pipelines-work" className="prose max-w-none">
        <p><span className="drop-cap">A</span> CRM pipeline is a visual representation of how your contacts move through different stages of your relationship. Instead of treating every subscriber the same, the pipeline helps you see who is new, who is engaged, who is close to taking action, and who needs attention. For email marketers, pipelines add clarity and structure to communication. Platforms like <strong>Brevo</strong> simplify this process with drag-and-drop pipelines, clean stage management, and automated contact movement. This guide explains how pipelines work from the ground up and how to use stages, deals, scoring, and activity data to create clear, predictable communication.</p>

        <div className="key-tip-block">
            <strong>Key Tip #1:</strong> {post.keyTip1}
        </div>

        <h2>Why CRM Pipelines Matter</h2>

        <p>Pipelines turn scattered contacts into organized journeys. When you know the stage of each person, communication becomes accurate and intentional. Without a pipeline, you respond reactively. With a pipeline, you respond strategically.</p>
        
        <h3>Pipelines matter because they:</h3>
        <ul>
            <li>create structure</li>
            <li>visualize journeys</li>
            <li>show priority contacts</li>
            <li>improve segmentation</li>
            <li>help measure progress</li>
            <li>support automation</li>
        </ul>
        <p>A good pipeline makes your CRM easier to manage and your communication easier to plan.</p>

        <h2>What Exactly Is a CRM Pipeline?</h2>
        <p>A pipeline is a sequence of stages that represent the progress of a contact. Each stage describes a level of interest, readiness, or engagement. Pipelines can be simple or advanced depending on your workflow.</p>
        
        <h3>A basic pipeline includes:</h3>
        <ul>
            <li>new</li>
            <li>engaged</li>
            <li>interested</li>
            <li>qualified</li>
            <li>converted</li>
        </ul>
        <p>Tools like <strong>Brevo</strong> allow you to customize unlimited pipelines based on industry, funnel type, or communication structure.</p>

        <h2>Stages: The Building Blocks of the Pipeline</h2>
        <p>Each stage represents a step in the journey. Stages reduce confusion by showing where the contact stands and what the next step might be.</p>
        
        <h3>Common stage types include:</h3>
        <ul>
            <li><strong>New Subscriber</strong> — someone who just entered your list</li>
            <li><strong>Engaged</strong> — reading emails consistently</li>
            <li><strong>Interested</strong> — clicking links or filling forms</li>
            <li><strong>Qualified</strong> — showing strong intent</li>
            <li><strong>Converted</strong> — completed the main action</li>
        </ul>
        <p>Stages keep the CRM organized and create predictable movement.</p>

        <h2>Deals: Tracking Opportunities Inside the Pipeline</h2>
        <p>A deal represents a specific opportunity or goal tied to a contact. Even if you're not selling products, a deal can represent a conversion point such as:</p>
        <ul>
            <li>booking a call</li>
            <li>requesting information</li>
            <li>joining a program</li>
            <li>subscribing to a paid plan</li>
        </ul>
        <p>In platforms like <strong>Brevo</strong>, deals can be assigned to contacts and moved across stages visually. This helps you understand progress and follow-up needs.</p>

        <h2>Pipeline Movement: How Contacts Move Between Stages</h2>
        <p>Contacts move across stages in two ways: manually or automatically.</p>
        
        <h3>Manual movement example:</h3>
        <ul><li>You drag a contact from “interested” to “qualified” after they reply.</li></ul>
        
        <h3>Automatic movement example:</h3>
        <ul><li>An automation shifts the contact to “engaged” when they open three newsletters.</li></ul>
        <p>Tools like <strong>Brevo</strong> support both styles and allow you to build rules around behavior.</p>

        <h2>Behavior Triggers for Pipeline Movement</h2>
        <p>A contact's stage should change when they show meaningful behavior. Behavior triggers help you automate this process.</p>
        
        <h3>Common triggers:</h3>
        <ul>
            <li>opened emails consistently</li>
            <li>clicked key links</li>
            <li>visited important pages</li>
            <li>filled a form</li>
            <li>asked a question</li>
            <li>booked a call</li>
        </ul>
        <p>Behavior defines stage—not assumptions.</p>

        <h2>Lead Scoring: Measuring Contact Quality</h2>
        <p>Lead scoring assigns points to each action a contact takes. The more meaningful the action, the more points they earn. This helps you identify strong, weak, or cold leads.</p>
        
        <h3>Examples of scoring:</h3>
        <ul>
            <li>+1 point → email open</li>
            <li>+3 points → link click</li>
            <li>+5 points → form submission</li>
            <li>+10 points → booking a call</li>
        </ul>
        <p>Lead scoring helps prioritize your time and communication. Tools like <strong>Brevo</strong> offer built-in scoring to simplify this process.</p>

        <h2>How Scoring and Pipelines Work Together</h2>
        <p>Scoring tells you how engaged a contact is. Pipelines tell you where they are in the journey. When combined, you get a clear map of who needs attention.</p>
        
        <h3>Example combined system:</h3>
        <ul>
            <li>0–5 points → new</li>
            <li>6–15 points → engaged</li>
            <li>16–30 points → interested</li>
            <li>31+ points → qualified</li>
        </ul>
        <p>This structure creates a predictable, scalable CRM.</p>

        <div className="key-tip-block">
            <strong>Key Tip #2:</strong> {post.keyTip2}
        </div>

        <h2>Activity Timeline: The History of Each Contact</h2>
        <p>A CRM’s activity timeline shows every action a subscriber takes. This helps you understand behavior patterns and adjust communication.</p>
        
        <h3>Timeline may include:</h3>
        <ul>
            <li>emails opened</li>
            <li>links clicked</li>
            <li>pages visited</li>
            <li>SMS or WhatsApp replies</li>
            <li>form submissions</li>
            <li>purchase behavior</li>
        </ul>
        <p>Platforms like <strong>Brevo</strong> unify all channels in one timeline, which makes tracking behavior easier.</p>

        <h2>Using CRM Pipelines for Email Marketing</h2>
        <p>Pipelines help email marketers deliver structured journeys. When you know where a contact is, you know what message fits their stage.</p>
        
        <h3>Examples:</h3>
        <ul>
            <li>new subscribers receive introductory emails</li>
            <li>engaged subscribers receive deeper guides</li>
            <li>interested subscribers receive clear next steps</li>
            <li>inactive subscribers receive re-engagement messages</li>
        </ul>
        <p>Pipeline awareness creates logical communication.</p>

        <h2>How Automations Improve Pipeline Quality</h2>
        <p>Automations reduce manual work and help keep the pipeline clean. When contacts move through stages based on rules, your CRM updates itself.</p>
        
        <h3>Common automation actions:</h3>
        <ul>
            <li>assign tag based on click behavior</li>
            <li>increase score when subscriber reads multiple emails</li>
            <li>move contact to new stage after form completion</li>
            <li>notify team when contact becomes qualified</li>
        </ul>
        <p>With tools like <strong>Brevo</strong>, automations are visual, allowing you to build flows without complexity.</p>

        <h2>CRM Pipeline Layout: Keeping Things Simple</h2>
        <p>A good pipeline is simple, not crowded. Too many stages create confusion. Start with 4–6 stages and expand only if absolutely needed.</p>
        
        <h3>Clean pipeline example:</h3>
        <ul>
            <li>new</li>
            <li>engaged</li>
            <li>interested</li>
            <li>qualified</li>
            <li>converted</li>
        </ul>
        <p>Clear stages help you understand progress instantly.</p>

        <h2>Pipeline Reporting: Understanding What Is Working</h2>
        <p>Reports help you see where contacts get stuck, how fast they move, and which behaviors predict progress.</p>
        
        <h3>Useful reporting metrics:</h3>
        <ul>
            <li>time spent in each stage</li>
            <li>conversion rate between stages</li>
            <li>drop-off points</li>
            <li>engagement scores</li>
        </ul>
        <p>Pipeline reporting improves strategy and communication quality.</p>

        <h2>Common CRM Pipeline Mistakes</h2>
        <ul>
            <li>adding unnecessary stages</li>
            <li>moving contacts manually without logic</li>
            <li>ignoring scoring</li>
            <li>mixing cold and warm leads</li>
            <li>not using behavior triggers</li>
        </ul>
        <p>A pipeline only works when kept simple and intentional.</p>

        <h2>Use Cases for CRM Pipelines</h2>
        <h3>1. Lead Nurturing</h3>
        <p>Track progress and send messages based on engagement.</p>
        <h3>2. Sales Follow-Up</h3>
        <p>Move contacts through qualification until readiness.</p>
        <h3>3. Onboarding</h3>
        <p>Guide new users through steps.</p>
        <h3>4. Re-Engagement Planning</h3>
        <p>Identify cold contacts and prevent inactivity.</p>
        <h3>5. Multi-Channel Coordination</h3>
        <p>Match stage with email, SMS, and WhatsApp follow-ups.</p>

        <h2>Pipeline Component Comparison Table</h2>
        <table>
            <thead>
                <tr>
                    <th>Component</th>
                    <th>Purpose</th>
                    <th>Example Use</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Stage</td>
                    <td>Shows progress</td>
                    <td>New → Engaged</td>
                </tr>
                <tr>
                    <td>Deal</td>
                    <td>Tracks opportunity</td>
                    <td>Booked call</td>
                </tr>
                <tr>
                    <td>Score</td>
                    <td>Measures intent</td>
                    <td>20+ = Interested</td>
                </tr>
                <tr>
                    <td>Movement Trigger</td>
                    <td>Updates pipeline</td>
                    <td>Clicked → Move</td>
                </tr>
                <tr>
                    <td>Timeline</td>
                    <td>Shows behavior</td>
                    <td>Opened 5 emails</td>
                </tr>
            </tbody>
        </table>

        <h2>Pros & Cons of CRM Pipelines</h2>
        <h3>Pros</h3>
        <ul>
            <li>clarity of progress</li>
            <li>strong segmentation</li>
            <li>better follow-up timing</li>
            <li>predictable communication</li>
        </ul>
        <h3>Cons</h3>
        <ul>
            <li>needs consistent maintenance</li>
            <li>can get complex if unmanaged</li>
        </ul>

        <h2>Final Verdict</h2>
        <p>CRM pipelines turn chaotic contacts into structured journeys. They help you understand behavior, identify intent, and send the right message at the right stage. With scoring, activity tracking, and automation, pipelines become a powerful tool for managing communication. Platforms like <strong>Brevo</strong> make pipeline building beginner-friendly with visual layouts and logical workflows.</p>
        
        <div className="recommendation-box">
            <strong>Keymara Recommendation:</strong>
            <p>{post.recommendation}</p>
        </div>

        <p>Continue reading our CRM & Integrations series to understand how integrations connect your website, store, and apps directly to your CRM for real-time updates.</p>

        <div className="key-tip-block">
            <strong>Key Tip #3:</strong> {post.keyTip3}
        </div>
    </article>
  );
}
