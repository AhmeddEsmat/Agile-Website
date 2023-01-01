import "./Blog.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Blog = () => {
  return (
    <div className="blog">
      <h1 className="text-center py-5 fw-bold">
        <span className="text-info">Blog</span>
      </h1>
      <h3>3 Insanely Simple Ways To Get More Fiber In Your Diet Every Day</h3>
      <img
        src="https://www.mindbodygreen.com/static/ed84ab1a646c6f0c73a15994333ec4fe/db58c/aetu1lq40lcavy8ye.webp"
        alt=""
      />
      <div className="container">
        Did you know that a whopping 95% of Americans1 aren't getting enough
        fiber in their daily diet?! Yes, you read that correctly—only 5% of
        Americans are consuming the recommended daily fiber amount to adequately
        support optimal gut health, bowel movements, detoxification, and
        whole-body well-being! Truthfully, fiber isn't at the top of most
        people's nutritional priority list—but considering its vast range of
        critical health benefits, we're making the argument that it absolutely
        should be. Listen, we get it. It's tough enough to make sure you're
        getting adequate sleep, movement, protein, water, vitamin D...(the list
        goes on and on). That's why we've put together this short-and-sweet list
        of things you can start doing to ensure you're getting adequate fiber in
        your diet every single day.
      </div>
      <h4>1.Take a fiber supplement.</h4>
      <div className="container">
        Including a fiber supplement in your daily well-being routine can help
        you meet the recommended intake of daily fiber.
      </div>
      <h4>2. Switch to whole grains.</h4>
      <div className="container">
        Swapping refined, processed grains (think: white bread, white flour,
        white rice) for whole, high-fiber grains like quinoa, buckwheat, oats,
        whole wheat pasta, barley, and brown and wild rice is a simple but
        impactful way to add more fiber to your diet.
      </div>
      <h4>3. Load up your plate with plant foods..</h4>
      <div className="container">
        Fruits, vegetables, legumes, nuts, and seeds are all rich with fiber. In
        other words? The more plants you’re able to add to each meal, the
        better! Make it a challenge to make each meal as diverse and abundant
        with plant foods as possible to ensure you’re giving your body the fiber
        it needs and supporting your gut microbiome with a diverse and
        nutrient-abundant diet. (Let's be honest, plant foods are just plain fun
        and delicious as well! They add color, flavor, and nutrients to every
        dish. Win win!)
      </div>
      <h4>The takeaway.</h4>
      <div className="container">
        I think "eating more fiber” should be everyone’s New Year's resolution!
        Follow these tips to ensure you’re getting enough fiber to promote
        healthy bowel movements, gut function, healthy blood sugar balance, and
        so much more.
      </div>
    </div>
  );
};

export default Blog;
