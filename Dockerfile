# Use Microsoft's official Playwright image as base
FROM mcr.microsoft.com/playwright:v1.41.2-jammy

# Set working directory
WORKDIR /app

# Copy package files
COPY package.json package-lock.json* ./

# Install dependencies
RUN npm ci

# Copy project files
COPY . .

# Ensure browsers are installed
RUN npx playwright install --with-deps chromium firefox webkit

# Command to run tests
CMD ["npx", "playwright", "test", "--project=chromium"]