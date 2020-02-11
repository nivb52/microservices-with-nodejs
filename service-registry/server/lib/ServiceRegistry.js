class ServiceRegistry {
  constructor(log) {
    this.log = log;
    this.service = {};
    this.timeput = 30;
  }

  register(name, version, ip, port) {
    const key = name + version + ip + port;
    const serviceInfo = () => {
      return `added service ${name}, v.${version} at ${ip} :${port}`;
    };

    if (!this.services[key]) {
      this.services[key] = {};
      this.services[key].ip = ip;
      this.services[key].port = port;
      this.services[key].timestamp = Math.floor(new Date() / 1000);
      this.services[key].name = name;
      this.services[key].version = version;
      this.log.debug(`added ${serviceInfo}`);
      return key;
    }

    this.service[key].timestamp = Math.floor(new Date() / 1000);
    this.log.debug(`updated ${serviceInfo}`);
    return key;
  }
}

module.exports = ServiceRegistry;
