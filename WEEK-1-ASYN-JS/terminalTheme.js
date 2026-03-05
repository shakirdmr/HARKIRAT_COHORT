// Modern Terminal Theme System with ANSI Colors & UI Components

class TerminalTheme {
  // ANSI Color Codes
  static colors = {
    reset: '\x1b[0m',
    bright: '\x1b[1m',
    dim: '\x1b[2m',
    italic: '\x1b[3m',
    underline: '\x1b[4m',
    inverse: '\x1b[7m',
    
    // Foreground Colors
    black: '\x1b[30m',
    red: '\x1b[31m',
    green: '\x1b[32m',
    yellow: '\x1b[33m',
    blue: '\x1b[34m',
    magenta: '\x1b[35m',
    cyan: '\x1b[36m',
    white: '\x1b[37m',
    gray: '\x1b[90m',
    
    // Bright Foreground Colors
    brightRed: '\x1b[91m',
    brightGreen: '\x1b[92m',
    brightYellow: '\x1b[93m',
    brightBlue: '\x1b[94m',
    brightMagenta: '\x1b[95m',
    brightCyan: '\x1b[96m',
    
    // Background Colors
    bgBlack: '\x1b[40m',
    bgRed: '\x1b[41m',
    bgGreen: '\x1b[42m',
    bgYellow: '\x1b[43m',
    bgBlue: '\x1b[44m',
    bgMagenta: '\x1b[45m',
    bgCyan: '\x1b[46m',
    bgWhite: '\x1b[47m',
  };

  // Styled text output
  static text = {
    success: (msg) => `${TerminalTheme.colors.brightGreen}✓ ${msg}${TerminalTheme.colors.reset}`,
    error: (msg) => `${TerminalTheme.colors.brightRed}✗ ${msg}${TerminalTheme.colors.reset}`,
    warning: (msg) => `${TerminalTheme.colors.brightYellow}⚠ ${msg}${TerminalTheme.colors.reset}`,
    info: (msg) => `${TerminalTheme.colors.brightCyan}ℹ ${msg}${TerminalTheme.colors.reset}`,
    bold: (msg) => `${TerminalTheme.colors.bright}${msg}${TerminalTheme.colors.reset}`,
    dim: (msg) => `${TerminalTheme.colors.dim}${msg}${TerminalTheme.colors.reset}`,
    underline: (msg) => `${TerminalTheme.colors.underline}${msg}${TerminalTheme.colors.reset}`,
  };

  // Box drawing with modern themes
  static box = {
    simple: { top: '─', bottom: '─', left: '│', right: '│', topLeft: '┌', topRight: '┐', bottomLeft: '└', bottomRight: '┘' },
    double: { top: '═', bottom: '═', left: '║', right: '║', topLeft: '╔', topRight: '╗', bottomLeft: '╚', bottomRight: '╝' },
    round: { top: '─', bottom: '─', left: '│', right: '│', topLeft: '╭', topRight: '╮', bottomLeft: '╰', bottomRight: '╯' },
    thick: { top: '━', bottom: '━', left: '┃', right: '┃', topLeft: '┏', topRight: '┓', bottomLeft: '┗', bottomRight: '┛' },
  };

  // Create a formatted box
  static drawBox(content, options = {}) {
    const {
      style = 'simple',
      padding = 1,
      width = 50,
      color = 'cyan',
      align = 'left'
    } = options;

    const box = this.box[style];
    const lines = content.split('\n');
    const colorCode = this.colors[color] || this.colors.cyan;
    const resetCode = this.colors.reset;
    
    // Calculate padding
    const padX = ' '.repeat(padding);
    const padTop = Array(padding).fill('').map(() => 
      `${colorCode}${box.left}${' '.repeat(width - 2)}${box.right}${resetCode}`
    ).join('\n');
    
    const padBottom = Array(padding).fill('').map(() => 
      `${colorCode}${box.left}${' '.repeat(width - 2)}${box.right}${resetCode}`
    ).join('\n');

    const contentLines = lines.map(line => {
      const trimmed = line.substring(0, width - 4 - (2 * padding));
      const spacePad = ' '.repeat(Math.max(0, width - 4 - (2 * padding) - trimmed.length));
      return `${colorCode}${box.left}${padX}${trimmed}${spacePad}${padX}${box.right}${resetCode}`;
    }).join('\n');

    const topBorder = `${colorCode}${box.topLeft}${box.top.repeat(width - 2)}${box.topRight}${resetCode}`;
    const bottomBorder = `${colorCode}${box.bottomLeft}${box.bottom.repeat(width - 2)}${box.bottomRight}${resetCode}`;

    return [
      topBorder,
      padTop,
      contentLines,
      padBottom,
      bottomBorder
    ].filter(x => x).join('\n');
  }

  // Progress bar
  static progressBar(current, total, options = {}) {
    const {
      width = 30,
      color = 'green',
      showPercent = true,
      showCount = true
    } = options;

    const filled = Math.round((current / total) * width);
    const empty = width - filled;
    const percent = ((current / total) * 100).toFixed(0);
    
    const colorCode = this.colors[`bright${color.charAt(0).toUpperCase() + color.slice(1)}`] || this.colors.brightGreen;
    const bar = `${colorCode}${'█'.repeat(filled)}${this.colors.dim}${'░'.repeat(empty)}${this.colors.reset}`;
    
    let output = `[${bar}]`;
    if (showPercent) output += ` ${percent}%`;
    if (showCount) output += ` (${current}/${total})`;
    
    return output;
  }

  // Spinner animation
  static spinner = {
    dots: ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏'],
    dots2: ['⣾', '⣽', '⣻', '⢿', '⡿', '⣟', '⣯', '⣷'],
    dots3: ['⠋', '⠙', '⠚', '⠞', '⠖', '⠦', '⠴', '⠲', '⠳', '⠓'],
    dots4: ['⠄', '⠆', '⠇', '⠋', '⠙', '⠸', '⠰', '⠠', '⠰', '⠸', '⠙', '⠋', '⠇', '⠆'],
    dots5: ['⠋', '⠙', '⠚', '⠒', '⠂', '⠂', '⠒', '⠲', '⠴', '⠦', '⠖', '⠒', '⠐', '⠐', '⠒', '⠓', '⠋'],
    dots12: ['⢀', '⠀', '⠄', '⠂', '⠁', '⠁', '⠂', '⠄', '⠀', '⢀'],
    line: ['-', '\\', '|', '/'],
    line2: ['⠂', '-', '–', '—', '–', '-'],
    pipe: ['┤', '┘', '┴', '└', '├', '┌', '┬', '┐'],
    simpleDots: ['.  ', '.. ', '...'],
    arrow: ['←', '↖', '↑', '↗', '→', '↘', '↓', '↙'],
  };

  static createSpinner(message, spinnerType = 'dots', color = 'cyan') {
    const frames = this.spinner[spinnerType] || this.spinner.dots;
    let frameIndex = 0;

    return {
      start: function() {
        this.interval = setInterval(() => {
          const colorCode = TerminalTheme.colors[`bright${color.charAt(0).toUpperCase() + color.slice(1)}`] || TerminalTheme.colors.brightCyan;
          process.stdout.write(`\r${colorCode}${frames[frameIndex]} ${message}${TerminalTheme.colors.reset}`);
          frameIndex = (frameIndex + 1) % frames.length;
        }, 80);
      },
      stop: function(finalMessage = '') {
        clearInterval(this.interval);
        process.stdout.write(`\r${finalMessage || ''}\n`);
      }
    };
  }

  // Table formatting
  static table(data, options = {}) {
    const {
      headers = [],
      colors: tableColors = {},
      padding = 1,
      borderColor = 'cyan'
    } = options;

    if (!Array.isArray(data) || data.length === 0) return '';

    const cols = Array.isArray(headers) && headers.length > 0 ? headers : Object.keys(data[0]);
    const widths = cols.map((col, i) => 
      Math.max(
        col.toString().length,
        ...data.map(row => (row[col] || '').toString().length)
      ) + padding * 2
    );

    const borderCode = this.colors[borderColor] || this.colors.cyan;
    const divider = `${borderCode}${cols.map((_, i) => '─'.repeat(widths[i])).join('┼')}${this.colors.reset}`;
    
    let output = divider + '\n';
    
    // Headers
    const headerRow = cols.map((col, i) => 
      `${borderCode}│${this.colors.reset}${' '.repeat(padding)}${TerminalTheme.colors.bold}${col}${TerminalTheme.colors.reset}${' '.repeat(Math.max(0, widths[i] - col.toString().length - padding))}`
    ).join('');
    output += headerRow + `${borderCode}│${this.colors.reset}\n${divider}\n`;
    
    // Rows
    data.forEach(row => {
      const rowStr = cols.map((col, i) => 
        `${borderCode}│${this.colors.reset}${' '.repeat(padding)}${row[col] || ''}${' '.repeat(Math.max(0, widths[i] - (row[col] || '').toString().length - padding))}`
      ).join('');
      output += rowStr + `${borderCode}│${this.colors.reset}\n`;
    });
    
    output += divider;
    return output;
  }

  // Gradient-like text (fade between colors)
  static gradient(text, startColor = 'cyan', endColor = 'magenta') {
    const colors = ['cyan', 'blue', 'magenta'];
    return text.split('').map((char, i) => {
      const colorIndex = Math.floor((i / text.length) * (colors.length - 1));
      return `${this.colors[`bright${colors[colorIndex].charAt(0).toUpperCase() + colors[colorIndex].slice(1)}`]}${char}${this.colors.reset}`;
    }).join('');
  }

  // Clear screen and move cursor
  static clearScreen() {
    console.clear();
  }

  static moveCursor(x, y) {
    process.stdout.write(`\x1b[${y};${x}H`);
  }

  static hideCursor() {
    process.stdout.write('\x1b[?25l');
  }

  static showCursor() {
    process.stdout.write('\x1b[?25h');
  }
}

// Export for use
module.exports = TerminalTheme;

// Example usage (uncomment to test)
/*
const theme = TerminalTheme;

// Success/Error/Warning messages
console.log(theme.text.success('Operation completed'));
console.log(theme.text.error('Something went wrong'));
console.log(theme.text.warning('Please be careful'));
console.log(theme.text.info('Here is some information'));

// Box examples
console.log('\n' + theme.drawBox('Welcome to Terminal Theme', { style: 'round', color: 'cyan', width: 50 }));
console.log('\n' + theme.drawBox('Important Alert!', { style: 'double', color: 'red', width: 40 }));

// Progress bar
console.log('\nProgress:');
for (let i = 0; i <= 10; i++) {
  console.log(theme.progressBar(i, 10, { width: 20, color: 'green' }));
}

// Table
const tableData = [
  { name: 'Alice', age: 28, status: 'Active' },
  { name: 'Bob', age: 35, status: 'Inactive' },
  { name: 'Charlie', age: 42, status: 'Active' }
];
console.log('\n' + theme.table(tableData, { headers: ['name', 'age', 'status'], borderColor: 'cyan' }));

// Gradient text
console.log('\n' + theme.gradient('MODERN TERMINAL THEME'));

// Spinner
console.log('\nSpinner example:');
const spinner = theme.createSpinner('Loading...', 'dots', 'cyan');
spinner.start();
setTimeout(() => {
  spinner.stop(theme.text.success('Loaded!'));
}, 3000);
*/
