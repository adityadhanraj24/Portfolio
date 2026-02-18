import { Quote } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border py-8 sm:py-12 md:py-16 px-4 sm:px-6">
    <div className="container mx-auto max-w-3xl flex flex-col items-center text-center gap-3 sm:gap-4 mb-6 sm:mb-8">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold">
        Grateful for <span className="text-gradient">Your Visit!</span>
      </h2>
      <p className="text-sm sm:text-base text-muted-foreground">
        I truly appreciate the time you've taken to explore.
      </p>

      <div className="relative max-w-2xl py-4 sm:py-6">
        <Quote className="absolute top-0 left-0 text-primary/20 rotate-180 w-8 h-8 sm:w-12 sm:h-12" />
        <h3 className="text-xl sm:text-2xl md:text-3xl font-display font-medium px-4 sm:px-8">
          Together, we can create something <span className="text-gradient">extraordinary</span>
        </h3>
        <Quote className="absolute bottom-0 right-0 text-primary/20 w-8 h-8 sm:w-12 sm:h-12" />
      </div>

      <div className="max-w-4xl space-y-3 sm:space-y-4 text-muted-foreground px-2 sm:px-4">
        <p className="text-xs sm:text-sm leading-relaxed">
          Thank you for visiting my portfolio. I'm passionate about crafting exceptional digital experiences that make a difference. Whether you have a project in mind or just want to connect, I'd love to hear from you. Let's collaborate and bring your ideas to life!
        </p>
        <p className="text-xs sm:text-sm font-medium text-foreground">
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
