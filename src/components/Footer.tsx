import { Quote } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border pt-8 pb-2 px-2">
    <div className="container mx-auto max-w-3xl flex flex-col items-center text-center gap-2 mb-4">
      <h2 className="text-3xl sm:text-4xl font-display font-bold">
        Grateful for <span className="text-gradient">Your Visit!</span>
      </h2>
      <p className="text-muted-foreground">
        I truly appreciate the time you've taken to explore.
      </p>

      <div className="relative max-w-2xl py-2">
        <Quote className="absolute top-0 left-0 text-primary/20 rotate-180" size={48} />
        <h3 className="text-2xl sm:text-3xl font-display font-medium ">
          Together, we can create something <span className="text-gradient">extraordinary</span>
        </h3>
        <Quote className="absolute bottom-0 right-0 text-primary/20" size={48} />
      </div>

      <div className="max-w-4xl space-y-4 text-muted-foreground ">
        <p>
          Thank you for visiting my portfolio. I'm passionate about crafting exceptional digital experiences that make a difference. Whether you have a project in mind or just want to connect, I'd love to hear from you. Let's collaborate and bring your ideas to life!
        </p>
        <p className="font-medium text-foreground">
          Feel free to reach out. I look forward to connecting with you!
        </p>
      </div>
    </div>
    {/* <div className="grid text-muted-foreground mx-10 text-left">
  <p>
    Thank you for visiting my portfolio. I'm passionate about crafting exceptional digital experiences that make a difference. Whether you have a project in mind or just want to connect, I'd love to hear from you. Let's collaborate and bring your ideas to life!
  </p>
  <p>
    Feel free to reach out. I look forward to connecting with you!
  </p>
</div> */}
</footer>

  // </footer>
);

export default Footer;
