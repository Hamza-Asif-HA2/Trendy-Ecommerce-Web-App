import React from 'react';

function About() {
  return (
    <div className="mx-auto w-full max-w-7xl flex flex-col justify-center items-center p-4">
      <h1 className='font-bold text-3xl m-2'>About Trendy</h1>

      <section className="text-justify space-y-4">
        <p>
          Welcome to Trendy, your ultimate destination for stylish, high-quality fashion. At Trendy, we believe that fashion is not just about clothes—it's about expressing who you are. Whether you're looking for the latest trends or timeless classics, we have everything you need to create a look that’s uniquely yours.
        </p>

        <h2 className="font-semibold text-2xl mt-6">Our Mission</h2>
        <p>
          At Trendy, our mission is simple: to make fashion accessible to everyone. We are committed to providing our customers with a curated selection of the best fashion items at competitive prices. We understand that style is personal, so we offer a diverse range of products to help you find exactly what you’re looking for.
        </p>

        <h2 className="font-semibold text-2xl mt-6">Why Choose Us?</h2>
        <ul className="list-disc list-inside text-left">
          <li><strong>Curated Collections:</strong> Our team of fashion experts handpicks every item in our collection, ensuring that you have access to the latest trends and timeless essentials.</li>
          <li><strong>Quality & Affordability:</strong> We believe that everyone should have access to high-quality fashion, which is why we offer top-notch products at prices that won’t break the bank.</li>
          <li><strong>Seamless Shopping Experience:</strong> With our user-friendly website, finding your next favorite outfit is a breeze. Enjoy a hassle-free shopping experience from the comfort of your home.</li>
        </ul>

        <h2 className="font-semibold text-2xl mt-6">Our Products</h2>
        <p>
          Trendy offers a wide range of fashion items for Men, Women, and Kids, including:
        </p>
        <ul className="list-disc list-inside text-left">
          <li><strong>Clothing:</strong> From casual wear to formal attire, we have everything you need to dress up for any occasion.</li>
          <li><strong>Accessories:</strong> Complete your look with our selection of stylish watches, bags, and more.</li>
          <li><strong>Footwear:</strong> Step up your shoe game with our collection of trendy and comfortable footwear.</li>
        </ul>

        <h2 className="font-semibold text-2xl mt-6">Our Values</h2>
        <ul className="list-disc list-inside text-left">
          <li><strong>Customer Satisfaction:</strong> Your satisfaction is our top priority. We are dedicated to providing excellent customer service and ensuring that every shopping experience is a positive one.</li>
          <li><strong>Sustainability:</strong> We care about the environment and strive to offer products that are both fashionable and sustainable.</li>
          <li><strong>Innovation:</strong> We are always looking for new ways to enhance your shopping experience, whether through our website’s features or our product offerings.</li>
        </ul>

        <h2 className="font-semibold text-2xl mt-6">Get in Touch</h2>
        <p>
          We’re here to help! If you have any questions, feedback, or simply want to say hello, feel free to reach out to our customer service team. We’re always happy to hear from you.
        </p>

        <p className="mt-4">
          Thank you for choosing Trendy as your go-to fashion destination. We look forward to helping you discover your style!
        </p>
      </section>
    </div>
  );
}

export default About;
