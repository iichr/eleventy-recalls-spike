---
layout: sub-navigation
order: 3
includeInBreadcrumbs: true
title: DVSA - Vehicle Recalls Service API v0.3.2
---
<div id="swagger-ui"></div>
<script src="https://unpkg.com/swagger-ui-dist@4.5.0/swagger-ui-bundle.js" crossorigin></script>
<script>
  window.onload = () => {
    window.ui = SwaggerUIBundle({
      url: '/recalls/vehicle-recalls-service/api-spec/external_api_recalls.yml',
      dom_id: '#swagger-ui',
    });
  };
</script>
