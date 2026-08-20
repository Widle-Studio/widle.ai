import re

with open('components/legacy-hero.tsx', 'r') as f:
    content = f.read()

# I will revert the previous change for "We Build. We Scale. We Automate!" and put the one from the new request
new_content = re.sub(r'<h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl mb-4 leading-\[1\.1\]">.*?</h1>',
"""<h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl mb-4 leading-[1.1]">
              <span className="block">Innovative <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500">AI</span></span>
              <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-2">Cloud software solutions &</span>
              <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-2">Retool expertise</span>
              <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-2 text-gray-300">to power your business!</span>
            </h1>""", content, flags=re.DOTALL)

with open('components/legacy-hero.tsx', 'w') as f:
    f.write(new_content)
