import ScrollAnimation from '../ScrollAnimation';

export default function ScrollAnimationExample() {
  return (
    <div className="min-h-screen bg-background p-8">
      <ScrollAnimation>
        <h2 className="text-4xl font-bold text-foreground">Animated Content</h2>
      </ScrollAnimation>
    </div>
  );
}
