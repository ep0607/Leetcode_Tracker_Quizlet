# 📚 Study Tracker Pro

A comprehensive study application that combines LeetCode problem tracking with flashcard functionality, designed to help you ace your coding interviews and master programming concepts.

![Study Tracker Pro](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

## ✨ Features

### 🎯 **Overview Dashboard**
- **Statistics Overview**: Track problems solved, current streak, study time, and flashcards mastered
- **Progress Breakdown**: Visual progress bars for Easy, Medium, and Hard problems
- **Recent Activity**: Timeline of your latest study sessions and achievements
- **Goal Tracking**: Set and monitor daily, weekly, and monthly targets

### 💻 **LeetCode Problem Tracker**
- **Problem Management**: Add, track, and organize coding problems
- **Status Tracking**: Mark problems as Todo, Attempted, or Solved
- **Smart Filtering**: Filter by difficulty level, status, topic, or search terms
- **Notes System**: Add personal notes about your approach and solutions
- **Progress Analytics**: Visual breakdown of your problem-solving progress

### 🎴 **Flashcard System**
- **Custom Cards**: Create flashcards for coding concepts, algorithms, and data structures
- **Study Mode**: Interactive study sessions with flip cards
- **Self-Assessment**: Track your accuracy with correct/incorrect marking
- **Category Organization**: Organize cards by topics (Algorithms, Data Structures, etc.)
- **Performance Tracking**: Monitor review statistics and accuracy rates
- **Spaced Learning**: Review cards based on your performance history

### 📊 **Analytics & Progress**
- **Detailed Statistics**: Comprehensive tracking of your study habits
- **Visual Progress**: Charts and progress bars for motivation
- **Streak Tracking**: Maintain and track your daily study streaks
- **Performance Insights**: Understand your strengths and areas for improvement

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn package manager

### Installation

1. **Clone the repository**
   \`\`\`bash
   git clone https://github.com/yourusername/study-tracker-pro.git
   cd study-tracker-pro
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   # or
   yarn install
   \`\`\`

3. **Run the development server**
   \`\`\`bash
   npm run dev
   # or
   yarn dev
   \`\`\`

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **State Management**: React Hooks (useState, useEffect)

## 📁 Project Structure

\`\`\`
study-tracker-pro/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ui/                 # shadcn/ui components
│   ├── flashcard-section.tsx
│   ├── leetcode-tracker.tsx
│   └── stats-overview.tsx
├── lib/
│   └── utils.ts
├── public/
├── README.md
├── next.config.js
├── package.json
├── tailwind.config.ts
└── tsconfig.json
\`\`\`

## 🎮 How to Use

### Adding LeetCode Problems

1. Navigate to the **LeetCode** tab
2. Click **"Add Problem"**
3. Fill in the problem details:
   - Problem title
   - Difficulty level (Easy/Medium/Hard)
   - Topic/Category
   - Initial status
   - Personal notes
4. Click **"Add Problem"** to save

### Creating Flashcards

1. Go to the **Flashcards** tab
2. Click **"Add Card"**
3. Enter your question and answer
4. Set the category and difficulty
5. Click **"Create Card"**

### Studying with Flashcards

1. In the Flashcards section, click **"Start Studying"**
2. Read the question and try to answer mentally
3. Click **"Show Answer"** to reveal the solution
4. Mark yourself as **Correct** or **Incorrect**
5. Continue through your deck

### Tracking Progress

- Check the **Overview** tab for comprehensive statistics
- Monitor your problem-solving streaks
- Review your accuracy rates on flashcards
- Set and track goals in the **Goals** tab

## 🎨 Customization

### Adding New Categories

You can easily add new problem categories or flashcard topics by modifying the respective components:

\`\`\`typescript
// In leetcode-tracker.tsx or flashcard-section.tsx
const categories = ["Algorithms", "Data Structures", "Dynamic Programming", "Your New Category"]
\`\`\`

### Styling

The app uses Tailwind CSS for styling. You can customize the theme by modifying:

- `tailwind.config.ts` - Tailwind configuration
- `app/globals.css` - Global styles
- Individual component files for specific styling

## 🔮 Future Enhancements

- [ ] **Database Integration**: Add Supabase/PostgreSQL for data persistence
- [ ] **User Authentication**: Multi-user support with personal accounts
- [ ] **Spaced Repetition**: Advanced algorithm for optimal review scheduling
- [ ] **Import/Export**: Backup and restore your study data
- [ ] **Mobile App**: React Native version for mobile devices
- [ ] **Study Groups**: Collaborative features for team study
- [ ] **AI Integration**: Smart problem recommendations based on your progress
- [ ] **Calendar Integration**: Schedule study sessions and reminders

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**
   \`\`\`bash
   git checkout -b feature/amazing-feature
   \`\`\`
3. **Commit your changes**
   \`\`\`bash
   git commit -m 'Add some amazing feature'
   \`\`\`
4. **Push to the branch**
   \`\`\`bash
   git push origin feature/amazing-feature
   \`\`\`
5. **Open a Pull Request**

### Development Guidelines

- Follow TypeScript best practices
- Use meaningful component and variable names
- Add comments for complex logic
- Ensure responsive design
- Test your changes thoroughly

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for the beautiful UI components
- [Lucide](https://lucide.dev/) for the clean icons
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Next.js](https://nextjs.org/) team for the amazing React framework

## 📞 Support

If you have any questions or run into issues:

1. Check the [Issues](https://github.com/yourusername/study-tracker-pro/issues) page
2. Create a new issue if your problem isn't already reported
3. Provide detailed information about your environment and the issue

## 🌟 Show Your Support

If this project helped you, please consider:

- ⭐ Starring the repository
- 🐛 Reporting bugs
- 💡 Suggesting new features
- 🤝 Contributing to the codebase

---

**Happy Studying! 🚀**
