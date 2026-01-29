export async function generateCode(prompt: string, currentCode: string = ""): Promise<string> {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1500));

  const lowerPrompt = prompt.toLowerCase();

  // CHECK FOR EDIT INTENT (If code exists and prompt doesn't explicitly ask for a new build)
  if (currentCode && !lowerPrompt.includes("create") && !lowerPrompt.includes("new") && !lowerPrompt.includes("generate")) {
    return modifyCode(currentCode, prompt);
  }

  // --- E-COMMERCE TEMPLATE ---
  if (lowerPrompt.includes("store") || lowerPrompt.includes("shop") || lowerPrompt.includes("ecommerce")) {
    return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Modern Shop</title>
        <style>
          body { font-family: 'Segoe UI', sans-serif; margin: 0; padding: 0; background: #f8f9fa; color: #333; }
          header { background: white; padding: 1.5rem 2rem; display: flex; justify-content: space-between; align-items: center; box-shadow: 0 2px 5px rgba(0,0,0,0.05); position: sticky; top: 0; z-index: 100; }
          .logo { font-weight: bold; font-size: 1.5rem; color: #2d3748; }
          .cart-count { background: #e53e3e; color: white; padding: 0.2rem 0.6rem; border-radius: 99px; font-size: 0.8rem; vertical-align: top; margin-left: 5px; }
          .hero { background: #2d3748; color: white; padding: 4rem 2rem; text-align: center; }
          h1 { margin: 0 0 1rem; font-size: 2.5rem; }
          .products { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 2rem; padding: 3rem 2rem; max-width: 1200px; margin: 0 auto; }
          .product { background: white; border-radius: 8px; overflow: hidden; transition: transform 0.2s, box-shadow 0.2s; border: 1px solid #e2e8f0; }
          .product:hover { transform: translateY(-5px); box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1); }
          .img-placeholder { height: 200px; background: #cbd5e0; display: flex; align-items: center; justify-content: center; color: #718096; }
          .p-details { padding: 1.5rem; }
          .price { font-size: 1.25rem; font-weight: bold; color: #2d3748; }
          .btn { background: #4299e1; color: white; border: none; padding: 0.5rem 1rem; border-radius: 4px; width: 100%; margin-top: 1rem; cursor: pointer; transition: background 0.2s; }
          .btn:hover { background: #3182ce; }
        </style>
      </head>
      <body>
        <header>
          <div class="logo">Shopify</div>
          <div style="cursor: pointer;" onclick="alert('Proceeding to checkout!')">Cart <span id="count" class="cart-count">0</span></div>
        </header>
        <div class="hero">
          <h1>Summer Collection 2024</h1>
          <p>Discover the latest trends in fashion and style.</p>
        </div>
        <div class="products">
          <!-- Product Items -->
          <div class="product">
            <div class="img-placeholder">Product Image</div>
            <div class="p-details">
              <h3>Classic White Tee</h3>
              <div class="price">$29.99</div>
              <button class="btn" onclick="addToCart('Classic White Tee')">Add to Cart</button>
            </div>
          </div>
          <div class="product">
            <div class="img-placeholder">Product Image</div>
            <div class="p-details">
              <h3>Denim Jacket</h3>
              <div class="price">$89.99</div>
              <button class="btn" onclick="addToCart('Denim Jacket')">Add to Cart</button>
            </div>
          </div>
          <div class="product">
            <div class="img-placeholder">Product Image</div>
            <div class="p-details">
              <h3>Running Shoes</h3>
              <div class="price">$119.99</div>
              <button class="btn" onclick="addToCart('Running Shoes')">Add to Cart</button>
            </div>
          </div>
        </div>
        <script>
          let count = 0;
          function addToCart(item) {
            count++;
            document.getElementById('count').innerText = count;
            alert(item + ' added to cart!');
          }
        </script>
      </body>
      </html>
    `;
  }

  // --- BUSINESS/CORPORATE TEMPLATE ---
  if (lowerPrompt.includes("business") || lowerPrompt.includes("agency") || lowerPrompt.includes("corporate") || lowerPrompt.includes("company")) {
    return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <title>TechSolutions Agency</title>
        <style>
          body { margin: 0; font-family: 'Helvetica Neue', sans-serif; color: #444; }
          nav { padding: 1.5rem 3rem; display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #eee; }
          .logo { font-weight: 800; font-size: 1.2rem; color: #1a202c; letter-spacing: -0.5px; }
          .hero { padding: 5rem 2rem; background: #f7fafc; text-align: center; }
          h1 { font-size: 3rem; color: #1a202c; letter-spacing: -1px; margin-bottom: 1rem; }
          .section { padding: 4rem 2rem; max-width: 900px; margin: 0 auto; }
          .services { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem; }
          .card { padding: 2rem; background: white; border: 1px solid #edf2f7; border-radius: 8px; text-align: center; }
          .card h3 { margin-top: 0; }
          input, textarea { width: 100%; padding: 0.8rem; margin-bottom: 1rem; border: 1px solid #e2e8f0; border-radius: 4px; box-sizing: border-box; }
          button { background: #2b6cb0; color: white; border: none; padding: 1rem 2rem; border-radius: 4px; font-weight: bold; cursor: pointer; }
          button:hover { background: #2c5282; }
        </style>
      </head>
      <body>
        <nav>
          <div class="logo">TechSolutions</div>
          <div>
            <a href="#contact" style="color: #2b6cb0; text-decoration: none; font-weight: 500;">Contact Us</a>
          </div>
        </nav>
        <div class="hero">
          <h1>Digital Transformation for<br>Modern Businesses</h1>
          <p style="font-size: 1.2rem; opacity: 0.8;">We help companies scale with cutting-edge technology.</p>
          <button onclick="document.getElementById('contact').scrollIntoView({behavior: 'smooth'})" style="margin-top: 2rem;">Get Started</button>
        </div>
        <div class="section">
          <div class="services">
            <div class="card">
              <h3>Strategy</h3>
              <p>Data-driven insights to guide your growth.</p>
            </div>
            <div class="card">
              <h3>Design</h3>
              <p>User-centric interfaces that convert.</p>
            </div>
            <div class="card">
              <h3>Development</h3>
              <p>Robust and scalable software solutions.</p>
            </div>
          </div>
        </div>
        <div class="section" id="contact" style="background: #ebf8ff; border-radius: 12px;">
          <h2 style="text-align: center; margin-bottom: 2rem;">Work With Us</h2>
          <form onsubmit="event.preventDefault(); alert('Thanks for reaching out! We will get back to you within 24 hours.');">
            <input type="text" placeholder="Your Name" required>
            <input type="email" placeholder="Email Address" required>
            <textarea rows="4" placeholder="How can we help?" required></textarea>
            <button type="submit" style="width: 100%;">Send Message</button>
          </form>
        </div>
      </body>
      </html>
    `;
  }

  // --- EVENT TEMPLATE ---
  if (lowerPrompt.includes("event") || lowerPrompt.includes("conference") || lowerPrompt.includes("meetup")) {
    return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <title>Design Conf 2024</title>
        <style>
          body { font-family: system-ui, sans-serif; margin: 0; background: #111; color: white; }
          .container { max-width: 800px; margin: 0 auto; padding: 2rem; }
          header { padding: 4rem 0; text-align: center; border-bottom: 1px solid #333; }
          .date { color: #f59e0b; font-weight: bold; text-transform: uppercase; letter-spacing: 2px; }
          h1 { font-size: 4rem; margin: 0.5rem 0; line-height: 1; }
          .btn-ticket { background: #f59e0b; color: black; border: none; padding: 1rem 3rem; font-size: 1.1rem; font-weight: bold; border-radius: 50px; cursor: pointer; margin-top: 2rem; transition: transform 0.2s; }
          .btn-ticket:hover { transform: scale(1.05); }
          .agenda { margin-top: 4rem; }
          .session { display: flex; gap: 2rem; padding: 1.5rem 0; border-bottom: 1px solid #222; align-items: center; }
          .time { width: 100px; font-weight: bold; color: #888; }
          .speaker { color: #f59e0b; font-size: 0.9rem; margin-top: 0.3rem; }
        </style>
      </head>
      <body>
        <header>
          <div class="container">
            <div class="date">AUG 24-26, 2024 • SAN FRANCISCO</div>
            <h1>The Future of<br>Digital Design</h1>
            <button class="btn-ticket" onclick="register()">Get Tickets</button>
          </div>
        </header>
        <div class="container agenda">
          <h2>Agenda</h2>
          <div class="session">
            <div class="time">09:00 AM</div>
            <div>
              <h3>Keynote: Design in the Age of AI</h3>
              <div class="speaker">Sarah Johnson, CTO DesignCorp</div>
            </div>
          </div>
          <div class="session">
            <div class="time">11:30 AM</div>
            <div>
              <h3>Workshop: Figma Mastery</h3>
              <div class="speaker">Mike Chen, Product Designer</div>
            </div>
          </div>
          <div class="session">
            <div class="time">02:00 PM</div>
            <div>
              <h3>Panel: Remote Collaboration</h3>
              <div class="speaker">Various Speakers</div>
            </div>
          </div>
        </div>
        <script>
          function register() {
            const email = prompt("Enter your email to secure your spot:");
            if (email) {
              alert("Ticket confirmed for " + email + "! See you in San Francisco.");
            }
          }
        </script>
      </body>
      </html>
    `;
  }

  // --- RESTAURANT TEMPLATE (UPDATED) ---
  if (lowerPrompt.includes("restaurant") || lowerPrompt.includes("food") || lowerPrompt.includes("cafe")) {
    return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Gourmet Haven</title>
        <style>
          body { font-family: 'Playfair Display', serif; margin: 0; padding: 0; background: #fffcf5; color: #4a4a4a; }
          .hero { 
            background: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80');
            background-size: cover;
            background-position: center;
            color: white;
            padding: 8rem 2rem;
            text-align: center;
          }
          h1 { font-size: 3.5rem; margin-bottom: 1rem; font-style: italic; }
          .btn { background: #d4a373; color: white; padding: 1rem 2rem; text-decoration: none; border-radius: 4px; display: inline-block; margin-top: 2rem; transition: background 0.3s; cursor: pointer; border: none; font-size: 1rem; }
          .btn:hover { background: #bc8a5f; }
          .menu { padding: 4rem 2rem; max-width: 900px; margin: 0 auto; }
          .menu-category { margin-bottom: 3rem; }
          .menu h2 { text-align: center; font-size: 2.5rem; margin-bottom: 2rem; color: #d4a373; }
          .item { display: flex; justify-content: space-between; margin-bottom: 1.5rem; border-bottom: 1px dotted #ccc; padding-bottom: 0.5rem; }
          .price { font-weight: bold; color: #d4a373; }
          .reservation { text-align: center; background: #e9edc9; padding: 4rem 2rem; }
        </style>
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet">
      </head>
      <body>
        <div class="hero">
          <h1>Gourmet Haven</h1>
          <p>Experience the finest culinary delights in the heart of the city.</p>
          <button class="btn" onclick="bookTable()">Book a Table</button>
        </div>
        <div class="menu">
          <h2>Our Menu</h2>
          <div class="menu-category">
            <div class="item"><span>Truffle Pasta</span><span class="price">$24</span></div>
            <div class="item"><span>Wagyu Beef Burger</span><span class="price">$18</span></div>
            <div class="item"><span>Seared Scallops</span><span class="price">$22</span></div>
            <div class="item"><span>Caesar Salad</span><span class="price">$14</span></div>
          </div>
        </div>
        <script>
          function bookTable() {
            const guests = prompt("How many guests?");
            if (guests) {
              alert("Table for " + guests + " confirmed! We look forward to hosting you.");
            }
          }
        </script>
      </body>
      </html>
    `;
  }

  // --- GYM TEMPLATE (UPDATED) ---
  if (lowerPrompt.includes("gym") || lowerPrompt.includes("fitness")) {
    return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Iron Forge Gym</title>
        <style>
          body { font-family: 'Oswald', sans-serif; margin: 0; padding: 0; background: #111; color: white; }
          header { display: flex; justify-content: space-between; padding: 1.5rem 3rem; align-items: center; border-bottom: 1px solid #333; }
          .logo { color: #ef4444; font-size: 1.5rem; font-weight: bold; text-transform: uppercase; letter-spacing: 2px; }
          .hero { 
            padding: 6rem 2rem; 
            text-align: center; 
            background: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80');
            background-size: cover;
            background-position: center;
          }
          h1 { font-size: 5rem; line-height: 1; margin: 0 0 1rem; text-transform: uppercase; }
          p { font-family: sans-serif; opacity: 0.8; max-width: 600px; margin: 0 auto 2rem; }
          .btn { background: #ef4444; color: white; padding: 1rem 3rem; font-weight: bold; text-decoration: none; text-transform: uppercase; clip-path: polygon(10% 0, 100% 0, 100% 80%, 90% 100%, 0 100%, 0 20%); transition: transform 0.2s; display: inline-block; cursor: pointer; border: none; font-size: 1rem; }
          .btn:hover { transform: translateY(-2px); }
          .plans { padding: 4rem 2rem; display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 2rem; max-width: 1200px; margin: 0 auto; }
          .plan { border: 1px solid #333; padding: 2rem; text-align: center; transition: border-color 0.3s; position: relative; }
          .plan:hover { border-color: #ef4444; }
          .price { font-size: 3rem; color: #ef4444; }
          .join-btn { background: transparent; border: 1px solid #ef4444; color: #ef4444; padding: 0.5rem 1.5rem; margin-top: 1rem; cursor: pointer; text-transform: uppercase; font-weight: bold; }
          .join-btn:hover { background: #ef4444; color: white; }
        </style>
        <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;700&display=swap" rel="stylesheet">
      </head>
      <body>
        <header>
          <div class="logo">Iron Forge</div>
          <button class="join-btn" onclick="joinNow('General Membership')">Join Now</button>
        </header>
        <div class="hero">
          <h1>Forge Your<br>Legacy</h1>
          <p>State of the art equipment, expert trainers, and a community that pushes you to be your best.</p>
          <button class="btn" onclick="joinNow('Free Trial')">Get Started Free</button>
        </div>
        <div class="plans">
          <div class="plan">
            <h3>Basic</h3>
            <div class="price">$29</div>
            <p>/month</p>
            <button class="join-btn" onclick="joinNow('Basic Plan')">Select</button>
          </div>
          <div class="plan">
            <h3>Pro</h3>
            <div class="price">$49</div>
            <p>/month</p>
            <button class="join-btn" onclick="joinNow('Pro Plan')">Select</button>
          </div>
          <div class="plan">
            <h3>Elite</h3>
            <div class="price">$99</div>
            <p>/month</p>
            <button class="join-btn" onclick="joinNow('Elite Plan')">Select</button>
          </div>
        </div>
        <script>
          function joinNow(plan) {
            alert("Welcome to Iron Forge! You've selected: " + plan + ". Please visit our front desk to complete registration.");
          }
        </script>
      </body>
      </html>
    `;
  }

  // --- PORTFOLIO TEMPLATE (UPDATED) ---
  if (lowerPrompt.includes("portfolio")) {
    return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>My Portfolio</title>
        <style>
          body { font-family: sans-serif; margin: 0; padding: 0; background: #f3f4f6; color: #1f2937; }
          header { background: #111827; color: white; padding: 2rem; text-align: center; }
          h1 { margin: 0; font-size: 2.5rem; }
          .container { max-width: 800px; margin: 2rem auto; padding: 0 1rem; }
          .card { background: white; padding: 1.5rem; border-radius: 8px; margin-bottom: 1.5rem; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
          .projects { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem; }
          .project { background: #e5e7eb; padding: 1rem; border-radius: 4px; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; }
          .btn-contact { background: #2563eb; color: white; border: none; padding: 0.5rem 1rem; border-radius: 4px; cursor: pointer; margin-top: 1rem; }
        </style>
      </head>
      <body>
        <header>
          <h1>John Doe</h1>
          <p>Creative Developer</p>
          <button class="btn-contact" style="background: white; color: #111827;" onclick="alert('Email me at: john@example.com')">Hire Me</button>
        </header>
        <div class="container">
          <div class="card">
            <h2>About Me</h2>
            <p>I build modern web applications with a focus on user experience and clean code.</p>
          </div>
          <h2>Projects</h2>
          <div class="projects">
            <div class="project">
              <h3>Project Alpha</h3>
              <p>A react-based dashboard.</p>
              <button class="btn-contact" onclick="alert('Viewing Project Alpha details...')">View Case Study</button>
            </div>
            <div class="project">
              <h3>Project Beta</h3>
              <p>E-commerce platform.</p>
              <button class="btn-contact" onclick="alert('Viewing Project Beta details...')">View Case Study</button>
            </div>
          </div>
        </div>
      </body>
      </html>
    `;
  }

  // --- BLOG TEMPLATE (UPDATED) ---
  if (lowerPrompt.includes("blog")) {
    return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>My Blog</title>
        <style>
          body { font-family: serif; margin: 0; padding: 0; background: #fff; color: #333; line-height: 1.6; }
          header { border-bottom: 1px solid #eee; padding: 2rem; text-align: center; display: flex; justify-content: space-between; align-items: center; max-width: 900px; margin: 0 auto; }
          h1 { font-family: sans-serif; letter-spacing: -1px; margin: 0; }
          .container { max-width: 700px; margin: 0 auto; padding: 2rem 1rem; }
          article { margin-bottom: 3rem; cursor: pointer; transition: opacity 0.2s; }
          article:hover { opacity: 0.7; }
          h2 { font-size: 1.8rem; margin-bottom: 0.5rem; }
          .date { color: #888; font-size: 0.9rem; }
          .subscribe-btn { background: black; color: white; border: none; padding: 0.5rem 1rem; cursor: pointer; font-family: sans-serif; }
        </style>
      </head>
      <body>
        <header>
          <h1>The Daily Thoughts</h1>
          <button class="subscribe-btn" onclick="alert('Thanks for subscribing to our newsletter!')">Subscribe</button>
        </header>
        <div class="container">
          <article onclick="alert('Opening: Understanding AI')">
            <h2>Understanding AI</h2>
            <div class="date">October 24, 2023</div>
            <p>Artificial Intelligence is changing the way we build software...</p>
          </article>
          <article onclick="alert('Opening: The Future of Web Design')">
            <h2>The Future of Web Design</h2>
            <div class="date">November 02, 2023</div>
            <p>Web design is becoming more dynamic and personalized...</p>
          </article>
        </div>
      </body>
      </html>
    `;
  }

  // Default generic landing page (UPDATED)
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Welcome</title>
      <style>
        body { font-family: sans-serif; margin: 0; padding: 0; color: #333; }
        .hero { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 4rem 2rem; text-align: center; }
        h1 { font-size: 3rem; margin-bottom: 1rem; }
        p { font-size: 1.25rem; opacity: 0.9; }
        .btn { background: white; color: #764ba2; padding: 0.75rem 1.5rem; border-radius: 99px; text-decoration: none; font-weight: bold; display: inline-block; margin-top: 1rem; cursor: pointer; border: none; font-size: 1rem; }
        .features { padding: 4rem 2rem; max-width: 1000px; margin: 0 auto; display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; }
        .feature h3 { color: #764ba2; }
      </style>
    </head>
    <body>
      <div class="hero">
        <h1>Welcome to My Website</h1>
        <p>Built automatically with AI power. Try asking for a "shop", "business", or "event" website!</p>
        <button class="btn" onclick="alert('Redirecting to dashboard...')">Get Started</button>
      </div>
      <div class="features">
        <div class="feature">
          <h3>Fast Performance</h3>
          <p>Optimized for speed and efficiency.</p>
        </div>
        <div class="feature">
          <h3>Beautiful Design</h3>
          <p>Modern aesthetics out of the box.</p>
        </div>
        <div class="feature">
          <h3>Fully Responsive</h3>
          <p>Look great on any device.</p>
        </div>
      </div>
    </body>
    </html>
  `;
}

// --- HELPER FOR MOCK EDITS ---
function modifyCode(code: string, prompt: string): string {
  let newCode = code;
  const lower = prompt.toLowerCase();

  // 1. Change Background Color
  if (lower.includes("background") || lower.includes("bg color")) {
    const colorMatch = lower.match(/(?:color|to)\s+([a-z]+|#[0-9a-f]{3,6})/i);
    if (colorMatch) {
      const newColor = colorMatch[1];
      newCode = newCode.replace(/body\s*{[^}]*background:[^;]+;/i, (match) => {
        return match.replace(/background:[^;]+;/, `background: ${newColor};`);
      });
      // Fallback if not found in body style
      newCode = newCode.replace(/background: #[^;]+;/i, `background: ${newColor};`);
    }
  }

  // 2. Change Text/Titles
  if (lower.includes("title") || lower.includes("heading")) {
    const textMatch = prompt.match(/(?:change|make|set)\s+(?:title|heading)\s+(?:to\s+)?["']?([^"']+)["']?/i);
    if (textMatch) {
      newCode = newCode.replace(/<h1[^>]*>(.*?)<\/h1>/i, `<h1>${textMatch[1]}</h1>`);
    }
  }

  // 3. Add Button
  if (lower.includes("add button") || lower.includes("create button")) {
    const btnText = prompt.match(/button\s+(?:called|text|saying)\s+["']?([^"']+)["']?/i)?.[1] || "New Button";
    const newBtnHtml = `<button class="btn" style="margin: 10px;" onclick="alert('${btnText} clicked')">${btnText}</button>`;

    // Attempt to insert after the last button or inside a logical container
    if (newCode.includes('</button>')) {
      newCode = newCode.replace('</button>', `</button>\n          ${newBtnHtml}`);
    } else {
      newCode = newCode.replace('</body>', `  <div style="text-align:center; margin: 20px;">${newBtnHtml}</div>\n</body>`);
    }
  }

  // 4. Dark Mode
  if (lower.includes("dark mode")) {
    newCode = newCode.replace(/background: #fff[^;]*;/g, "background: #1a202c;");
    newCode = newCode.replace(/color: #333[^;]*;/g, "color: #f7fafc;");
    newCode = newCode.replace(/background: white;/g, "background: #2d3748;");
    newCode = newCode.replace(/color: #4a4a4a;/g, "color: #e2e8f0;");
  }

  // 5. Generic Replacement (change X to Y)
  const changeMatch = prompt.match(/change\s+["']?([^"']+)["']?\s+to\s+["']?([^"']+)["']?/i);
  if (changeMatch) {
    const [_, search, replace] = changeMatch;
    // Escape special regex chars in search term
    const safeSearch = search.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    newCode = newCode.replace(new RegExp(safeSearch, "gi"), replace);
  }

  return newCode;
}
