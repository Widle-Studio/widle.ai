import re

with open('components/legacy-hero.tsx', 'r') as f:
    content = f.read()

# Replace the text inside the component
old_h1 = """<h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl mb-4 leading-[1.1]">
              <span className="block">We <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500">Build.</span></span>
              <span className="block">We <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500">Scale.</span></span>
              <span className="block">We <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500">Automate!</span></span>
            </h1>"""

new_h1 = """<h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl mb-4 leading-[1.1]">
              <span className="block">Innovative <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500">AI</span></span>
              <span className="block">Cloud software solutions &</span>
              <span className="block">Retool expertise</span>
              <span className="block">to power your business!</span>
            </h1>"""

content = content.replace(old_h1, new_h1)

with open('components/legacy-hero.tsx', 'w') as f:
    f.write(content)
