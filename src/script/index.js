const LINKS = [
  {
    color: '#2d333b',
    icon: 'github',
    name: "Github",
    link: 'https://github.com/uzervlad',
  },
  {
    color: '#6f86d4',
    icon: 'discord',
    name: 'Discord',
    link: 'https://discord.com/users/194483019799724032',
    size: 50,
  },
  {
    color: '#0077ff',
    icon: 'vk',
    name: "VK",
    link: 'https://vk.com/octopussx',
    size: 64
  },
  {
    color: '#ff0000',
    icon: 'youtube',
    name: "YouTube",
    link: 'https://www.youtube.com/@octopussx',
    size: 55,
  },
  {
    color: '#a970ff',
    icon: 'twitch',
    name: "Twitch",
    link: 'https://twitch.tv/octopussx',
    size: 57,
  },
];

let linksContainer = document.querySelector(".links");

for(let link of LINKS) {
  let wrapper = document.createElement("div");
    wrapper.className = "wrapper";

  let a = document.createElement("a");
    a.classList.add(link.icon);
    let style = `--highlight: ${link.color}`;
    if(link.size)
      style += `; --size: ${link.size}px`;
    a.setAttribute("style", style);
    a.target = "_blank";
    a.href = link.link;
    {
      let i = document.createElement("i");
      i.classList.add("fa-brands", `fa-${link.icon}`);
      a.append(i);
    }
    {
      let i = document.createElement("i");
      i.classList.add("fa-brands", `fa-${link.icon}`, "highlight");
      a.append(i);
    }

  let tooltip = document.createElement("span");
    tooltip.innerText = link.name;

  wrapper.append(a, tooltip);
  linksContainer.append(wrapper);
}
