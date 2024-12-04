function showTab(tabId) {
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.style.display = 'none';
    });
    document.getElementById(tabId).style.display = 'block';
}

function generateResult() {
    const interest = document.getElementById('interest').value.toLowerCase();
    const capital = parseFloat(document.getElementById('capital').value);
    const potentialIncome = parseFloat(document.getElementById('potential-income').value);
    const timeDevote = parseFloat(document.getElementById('time-devote').value);

    let suggestion = '';
    let steps = '';

    const interests = {
        technology: {
            suggestion: 'Explore technology startups such as software development, tech consulting, or tech education.',
            steps: `
                <h4>Steps to Make Your Tech Idea Feasible:</h4>
                <ol>
                    <li>Define the problem or need your tech solution addresses.</li>
                    <li>Conduct market research to validate demand and identify competitors.</li>
                    <li>Develop a prototype or MVP (Minimum Viable Product) to test your concept.</li>
                    <li>Gather feedback from potential users and iterate on your product based on their input.</li>
                    <li>Create a business plan detailing your strategy, target market, and revenue model.</li>
                    <li>Seek funding if necessary through investors, grants, or loans.</li>
                    <li>Launch your product with a clear marketing and distribution strategy.</li>
                    <li>Monitor performance and make adjustments to improve user experience and scalability.</li>
                </ol>
            `
        },
        food: {
            suggestion: 'Consider food businesses such as a restaurant, food truck, or catering service.',
            steps: `
                <h4>Steps to Make Your Food Business Idea Feasible:</h4>
                <ol>
                    <li>Identify your food concept and target market.</li>
                    <li>Develop and test your menu items to ensure quality and appeal.</li>
                    <li>Conduct a feasibility study including location analysis and cost projections.</li>
                    <li>Secure necessary permits and licenses for food handling and business operations.</li>
                    <li>Design a business plan outlining your operational, marketing, and financial strategies.</li>
                    <li>Obtain funding if required through loans, investors, or personal savings.</li>
                    <li>Set up your kitchen or food preparation area and hire staff if needed.</li>
                    <li>Launch with promotional activities to attract initial customers and generate buzz.</li>
                    <li>Collect feedback and continuously improve your offerings based on customer input.</li>
                </ol>
            `
        },
        fashion: {
            suggestion: 'Start a fashion business such as a clothing line, online boutique, or fashion consultancy.',
            steps: `
                <h4>Steps to Make Your Fashion Idea Feasible:</h4>
                <ol>
                    <li>Define your fashion niche and target audience.</li>
                    <li>Develop a unique brand identity and create initial designs.</li>
                    <li>Source materials and identify manufacturers or suppliers.</li>
                    <li>Develop a prototype or sample collection for feedback.</li>
                    <li>Conduct market research to validate your concept and identify potential customers.</li>
                    <li>Create a detailed business plan covering production, marketing, and distribution strategies.</li>
                    <li>Secure funding if needed through investors, loans, or crowdfunding.</li>
                    <li>Build an online presence through a website and social media channels.</li>
                    <li>Launch your collection and monitor performance, making adjustments as needed based on feedback.</li>
                </ol>
            `
        },
        fitness: {
            suggestion: 'Explore fitness ventures such as a gym, online fitness coaching, or a fitness product line.',
            steps: `
                <h4>Steps to Make Your Fitness Idea Feasible:</h4>
                <ol>
                    <li>Identify your target audience and fitness niche.</li>
                    <li>Develop a detailed plan for your fitness offering, whether it’s a gym, online platform, or product.</li>
                    <li>Conduct market research to assess demand and competition.</li>
                    <li>Create a prototype or pilot program to test your concept with a small group of users.</li>
                    <li>Gather feedback and refine your offering based on user input.</li>
                    <li>Prepare a comprehensive business plan including operational, marketing, and financial strategies.</li>
                    <li>Seek funding if necessary through loans, investors, or personal resources.</li>
                    <li>Launch your fitness business and implement effective marketing strategies to attract clients.</li>
                    <li>Continuously assess performance and adapt your services based on feedback and market trends.</li>
                </ol>
            `
        },
        art: {
            suggestion: 'Consider starting an art business such as an online gallery, art classes, or custom art commissions.',
            steps: `
                <h4>Steps to Make Your Art Business Idea Feasible:</h4>
                <ol>
                    <li>Define your niche within the art world and identify your target audience.</li>
                    <li>Build a portfolio showcasing your work and establish an online presence.</li>
                    <li>Develop a business model for selling or promoting your art, such as an online store or gallery.</li>
                    <li>Conduct market research to understand the demand and pricing in your niche.</li>
                    <li>Create a business plan detailing your goals, target market, and financial projections.</li>
                    <li>Seek funding if necessary to cover initial costs such as materials, marketing, and website setup.</li>
                    <li>Launch your business with a strong marketing campaign and engage with potential customers through exhibitions or social media.</li>
                    <li>Continuously adapt your offerings based on customer feedback and market trends.</li>
                </ol>
            `
        }
    };

    const interestKey = Object.keys(interests).find(key => interest.includes(key)) || 'default';

    const { suggestion: userSuggestion, steps: userSteps } = interests[interestKey] || {
        suggestion: 'Explore different business ideas and align them with your skills and interests.',
        steps: `
            <h4>Steps to Make Your Idea Feasible:</h4>
            <ol>
                <li>Clearly define the idea and its unique value proposition.</li>
                <li>Conduct market research to understand the target audience and competition.</li>
                <li>Create a prototype or proof of concept to test the idea.</li>
                <li>Gather feedback from potential users or customers and refine the idea accordingly.</li>
                <li>Develop a business plan that outlines operational, financial, and marketing strategies.</li>
                <li>Secure necessary funding through loans, investors, or savings if needed.</li>
                <li>Implement the idea on a small scale to test viability and gather more feedback.</li>
                <li>Adjust the business plan and operations based on real-world data and user responses.</li>
                <li>Prepare for a full-scale launch by finalizing all operational and marketing strategies.</li>
                <li>Launch your idea, monitor performance, and be ready to make ongoing adjustments to ensure success.</li>
            </ol>
        `
    };

    const potentialProfit = potentialIncome - capital;

    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <h3>Based on your interests and available time:</h3>
        <p>${userSuggestion}</p>
        <h3>Financial Overview:</h3>
        <p>Capital Invested: ₹${capital.toFixed(2)}</p>
        <p>Expected Monthly Income: ₹${potentialIncome.toFixed(2)}</p>
        <p>Potential Monthly Profit: ₹${potentialProfit.toFixed(2)}</p>
        <p>Time Available per Week: ${timeDevote} hours</p>
    `;

    const stepsDiv = document.getElementById('steps');
    stepsDiv.innerHTML = userSteps;

    showTab('get-started');
}

document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for your feedback!');
    document.getElementById('feedbackForm').reset();
});
document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for your feedback!');
    document.getElementById('feedbackForm').reset();
});
